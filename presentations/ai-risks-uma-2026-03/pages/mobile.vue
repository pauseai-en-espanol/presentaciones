<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { slides } from '#slidev/slides';
import configs from '#slidev/configs';
import { sharedState, patch } from '@slidev/client/state/shared.ts';
import { createClicksContextBase } from '@slidev/client/composables/useClicks.ts';
import { useTimer } from '@slidev/client/composables/useTimer.ts';
import { useWakeLock } from '@slidev/client/composables/useWakeLock.ts';
import NoteDisplay from '@slidev/client/internals/NoteDisplay.vue';
import SlideContainer from '@slidev/client/internals/SlideContainer.vue';
import SlideWrapper from '@slidev/client/internals/SlideWrapper.vue';

onMounted(() => {
  document.title = `Mobile — ${configs.slidesTitle}`;
});

if (__SLIDEV_FEATURE_WAKE_LOCK__) useWakeLock();

// Unique client ID for sync
const id = `${location.origin}_${Math.random().toString(36).slice(2)}`;

// --- State: read directly from sharedState (reactive, synced via WebSocket) ---
const currentPage = computed(() => sharedState.page);
const total = computed(() => slides.value.length);
const currentSlide = computed(() => slides.value[currentPage.value - 1]);

// Writable clicks ref — reads from shared state, writes via patch()
const clicksRef = computed({
  get: () => sharedState.clicks,
  set: (v: number) => {
    patch('clicks', v);
    patch('lastUpdate', { id, type: 'presenter' as const, time: Date.now() });
  },
});

// Clicks context for slide preview + NoteDisplay highlighting.
// Pass meta.clicks as-is (undefined for most slides) so createClicksContextBase
// falls through to its dynamic maxMap — populated when v-click directives mount
// via $clicksContext.setup() injected by Slidev's slide compiler.
const clicksCtx = computed(() => {
  const slide = currentSlide.value;
  return createClicksContextBase(
    clicksRef,
    slide?.meta?.slide?.frontmatter.clicksStart ?? 0,
    slide?.meta?.clicks,
  );
});

// --- Navigation: patch() directly → syncs to viewer at / ---
function broadcastUpdate() {
  patch('lastUpdate', { id, type: 'presenter' as const, time: Date.now() });
}

function next() {
  const clicks = sharedState.clicks;
  const clicksTotal = clicksCtx.value.total;
  const page = sharedState.page;

  if (clicks < clicksTotal) {
    patch('clicks', clicks + 1);
  } else if (page < total.value) {
    const nextSlide = slides.value[page]; // 0-indexed, page is 1-indexed → next slide
    patch('page', page + 1);
    patch('clicks', nextSlide?.meta?.slide?.frontmatter.clicksStart ?? 0);
  }
  patch('clicksTotal', clicksCtx.value.total);
  broadcastUpdate();
}

function prev() {
  const clicks = sharedState.clicks;
  const page = sharedState.page;
  const clicksStart = currentSlide.value?.meta?.slide?.frontmatter.clicksStart ?? 0;

  if (clicks > clicksStart) {
    patch('clicks', clicks - 1);
  } else if (page > 1) {
    const prevSlide = slides.value[page - 2]; // 0-indexed
    const prevTotal = prevSlide?.meta?.clicks ?? 0;
    patch('page', page - 1);
    patch('clicks', prevTotal);
  }
  patch('clicksTotal', clicksCtx.value.total);
  broadcastUpdate();
}

const hasNext = computed(
  () => currentPage.value < total.value || sharedState.clicks < clicksCtx.value.total,
);
const hasPrev = computed(
  () =>
    currentPage.value > 1 ||
    sharedState.clicks > (currentSlide.value?.meta?.slide?.frontmatter.clicksStart ?? 0),
);

// --- Notes auto-scroll ---
const notesEl = ref<HTMLDivElement>();
watch(currentPage, () => {
  notesEl.value?.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Timer (shared with presenter) ---
const { timer, toggle: toggleTimer, status: timerStatus } = useTimer();
</script>

<template>
  <div class="mobile-root">
    <!-- Progress bar -->
    <div class="mobile-progress">
      <div class="mobile-progress-bar" :style="{ width: `${(currentPage / total) * 100}%` }" />
    </div>

    <!-- Current slide preview (small) -->
    <div class="mobile-preview">
      <SlideContainer v-if="currentSlide">
        <SlideWrapper
          :key="currentPage"
          :route="currentSlide"
          :clicks-context="clicksCtx"
          render-context="previewNext"
        />
      </SlideContainer>
    </div>

    <!-- Speaker notes -->
    <div ref="notesEl" class="mobile-notes">
      <NoteDisplay
        :key="currentPage"
        :note="currentSlide?.meta?.slide?.note"
        :note-html="currentSlide?.meta?.slide?.noteHTML"
        :clicks-context="clicksCtx"
        :auto-scroll="true"
      />
    </div>

    <!-- Bottom bar: info row + equal prev/next buttons -->
    <div class="mobile-bottom">
      <div class="bottom-info" @click="toggleTimer">
        <span class="page-info">
          {{ currentPage }}<small class="page-total">/{{ total }}</small>
        </span>
        <span class="bottom-dot">·</span>
        <span class="timer-info" :class="timerStatus === 'running' ? 'timer-active' : 'timer-idle'">
          <template v-if="timer.h">{{ timer.h }}:</template>{{ timer.m }}:{{ timer.s }}
        </span>
      </div>
      <div class="bottom-nav">
        <button class="bottom-btn bottom-prev" :class="{ disabled: !hasPrev }" @click="prev">
          <span class="arrow">&#8249;</span>
        </button>
        <button class="bottom-btn bottom-next" :class="{ disabled: !hasNext }" @click="next">
          <span class="arrow">&#8250;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.mobile-root {
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background: #0f172a;
  color: #e2e8f0;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
}

/* --- Progress --- */
.mobile-progress {
  height: 3px;
  background: #1e293b;
  flex-shrink: 0;
}
.mobile-progress-bar {
  height: 100%;
  background: #ff9416;
  transition: width 0.3s ease;
}

/* --- Slide preview --- */
.mobile-preview {
  flex-shrink: 0;
  height: 28vh;
  background: #000;
  border-bottom: 1px solid #1e293b;
  overflow: hidden;
}
.mobile-preview .slidev-slide-container {
  width: 100%;
  height: 100%;
}

/* --- Notes --- */
.mobile-notes {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px 16px;
  font-size: 1.15em;
  line-height: 1.55;
  -webkit-overflow-scrolling: touch;
}
.mobile-notes .slidev-note {
  max-width: 100%;
}
.mobile-notes .slidev-note p {
  margin: 0.4em 0;
}
.mobile-notes .slidev-note ul,
.mobile-notes .slidev-note ol {
  margin: 0.3em 0;
  padding-left: 1.3em;
}
.mobile-notes .slidev-note strong {
  color: #ff9416;
}
.mobile-notes .slidev-note-fade {
  opacity: 0.25;
}

/* --- Bottom bar --- */
.mobile-bottom {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #1e293b;
  background: #1e293b;
}

/* Info row: counter · timer */
.bottom-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 6px 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  border-bottom: 1px solid #0f172a;
}
.bottom-info:active {
  background: #334155;
}
.bottom-dot {
  opacity: 0.3;
}
.page-info {
  font-size: 1.1em;
  font-weight: 700;
  color: #ff9416;
}
.page-total {
  font-weight: 400;
  opacity: 0.5;
  color: #e2e8f0;
  margin-left: 1px;
}
.timer-info {
  font-family: 'Fira Code', monospace;
  font-size: 0.85em;
}

/* Nav row: equal prev/next */
.bottom-nav {
  display: flex;
}
.bottom-btn {
  flex: 1;
  border: none;
  background: transparent;
  color: #e2e8f0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.1s;
}
.bottom-btn:active {
  background: #334155;
}
.bottom-btn.disabled {
  opacity: 0.15;
  pointer-events: none;
}
.bottom-btn .arrow {
  font-size: 2.5em;
  font-weight: 300;
  line-height: 1;
}
.bottom-prev {
  border-right: 1px solid #0f172a;
}
.bottom-next {
  border-left: 1px solid #0f172a;
}
.timer-active {
  color: #4ade80;
}
.timer-idle {
  opacity: 0.4;
}
</style>
