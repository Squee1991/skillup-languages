<script setup lang="ts">
import MascotHedgehog from '~/components/mascots/MascotHedgehog.vue'
import MascotSnake from '~/components/mascots/MascotSnake.vue'
import MascotBeaver from '~/components/mascots/MascotBeaver.vue'
import MascotGlobe from '~/components/mascots/MascotGlobe.vue'

import type { Component } from 'vue'

const props = defineProps<{ id: string }>()

// у каждого языка свой маскот, Глоби — запасной вариант для новых языков
const byLanguage: Record<string, Component> = {
  german: MascotHedgehog,
  spanish: MascotSnake,
  polish: MascotBeaver
}

const mascot = computed(() => byLanguage[props.id] ?? MascotGlobe)
</script>

<template>
  <component :is="mascot" />
</template>
