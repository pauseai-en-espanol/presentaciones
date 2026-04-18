<template>
  <div ref="container" :class="className">
    <iframe
      v-if="visible"
      :src="iframeSrc"
      :width="width"
      :height="height"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  videoId: { type: String, required: true },
  start: { type: Number, default: 0 },
  end: { type: Number, default: 0 },
  width: { type: String, default: '640' },
  height: { type: String, default: '360' },
  className: { type: String, default: '' },
});

const container = ref(null);
const visible = ref(false);
const iframeSrc = ref('');
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        let src = `https://www.youtube.com/embed/${props.videoId}?rel=0&autoplay=1&mute=1`;
        if (props.start) src += `&start=${props.start}`;
        if (props.end) src += `&end=${props.end}`;
        iframeSrc.value = src;
        visible.value = true;
      } else {
        visible.value = false;
        iframeSrc.value = '';
      }
    },
    { threshold: 0.5 },
  );
  observer.observe(container.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>
