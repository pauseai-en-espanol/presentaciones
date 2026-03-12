<template>
  <video
    ref="video"
    :src="fullSrc"
    :width="width"
    :class="className"
    muted
    loop
    controls
    playsinline
  />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  src: { type: String, required: true },
  width: { type: String, default: '640' },
  className: { type: String, default: '' },
});

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const fullSrc = computed(() => (props.src.startsWith('/') ? `${base}${props.src}` : props.src));

const video = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!video.value) return;
      if (entry.isIntersecting) {
        video.value.currentTime = 0;
        video.value.play();
      } else {
        video.value.pause();
      }
    },
    { threshold: 0.5 },
  );
  observer.observe(video.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
