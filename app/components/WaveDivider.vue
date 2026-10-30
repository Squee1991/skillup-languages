<script setup lang="ts">
// Волнистый край блока: кладётся внутрь секции (position: relative) сверху или снизу
// и закрашивается цветом соседней секции — получается волнистая граница.
withDefaults(defineProps<{ position?: 'top' | 'bottom'; color?: string }>(), {
  position: 'bottom',
  color: 'var(--bg)'
})
</script>

<template>
  <svg class="wave" :class="position" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 40 C240 90 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z" :style="{ fill: color }" />
  </svg>
</template>

<style scoped>
.wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: 60px;
  pointer-events: none;
}

.bottom {
  bottom: -1px;
}

.top {
  top: -1px;
  transform: scale(-1, -1);
}

@media (max-width: 720px) {
  .wave {
    height: 32px;
  }
}
</style>
