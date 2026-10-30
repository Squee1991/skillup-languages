<script setup lang="ts">
// Windows не рисует эмодзи флагов (показывает «DE», «ES»), поэтому флаги — SVG
defineProps<{ id: string }>()
</script>

<template>
  <svg class="flag-icon" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <template v-if="id === 'german'">
      <rect width="30" height="7" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#dd0000" />
      <rect y="13.33" width="30" height="6.67" fill="#ffce00" />
    </template>
    <template v-else-if="id === 'spanish'">
      <rect width="30" height="20" fill="#aa151b" />
      <rect y="5" width="30" height="10" fill="#f1bf00" />
    </template>
    <template v-else-if="id === 'polish'">
      <rect width="30" height="10" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#dc143c" />
    </template>
    <rect v-else width="30" height="20" fill="#7c3aed" />
    <rect width="30" height="20" rx="4" fill="none" stroke="#1e1b4b" stroke-width="2.5" />
  </svg>
</template>

<style scoped>
.flag-icon {
  display: inline-block;
  width: 1.4em;
  height: auto;
  vertical-align: -0.15em;
  border-radius: 4px;
  overflow: hidden;
}
</style>
