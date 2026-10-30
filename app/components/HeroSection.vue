<script setup lang="ts">
import { languages } from '~/data/languages'
import MascotGlobe from '~/components/mascots/MascotGlobe.vue'

const stats = [
  { value: '28 000+', label: 'учеников' },
  { value: '4.8 ★', label: 'рейтинг' },
  { value: '5 мин', label: 'в день' }
]
</script>

<template>
  <section class="hero">
    <div class="blob blob-1" />
    <div class="blob blob-2" />
    <div class="blob blob-3" />

    <div class="container hero-inner">
      <div class="hero-text">
        <span class="tag">🎉 Языки — это весело</span>
        <h1>
          Учи языки <span class="highlight">играючи</span> вместе с SkillUp Languages
        </h1>
        <p class="lead">
          Немецкий, испанский и польский — в приложениях для Android, iOS и прямо в браузере.
          Короткие уроки, игры и весёлый Глоби, который не даст забросить.
        </p>

        <div class="actions">
          <a href="#apps" class="btn btn-primary">🚀 Найти своё приложение</a>
          <a href="#how" class="btn btn-secondary">Как это работает</a>
        </div>

        <ul class="stats">
          <li v-for="s in stats" :key="s.label">
            <b>{{ s.value }}</b>
            <span>{{ s.label }}</span>
          </li>
        </ul>
      </div>

      <div class="hero-visual">
        <div class="sun" />
        <MascotGlobe class="mascot" />
        <NuxtLink
          v-for="(lang, i) in languages"
          :key="lang.id"
          :to="`/languages/${lang.id}`"
          class="bubble"
          :class="'bubble-' + i"
          :style="{ background: lang.colorSoft }"
        >
          <FlagIcon :id="lang.id" class="bubble-flag" />
          {{ lang.greeting }}
        </NuxtLink>
      </div>
    </div>

    <svg class="wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 40 C240 90 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z" fill="#7c3aed" />
    </svg>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 72px 0 140px;
  background: linear-gradient(160deg, #fff8ee 0%, #ffe4f1 55%, #e9e3ff 100%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0.55;
  animation: float 8s ease-in-out infinite;
}

.blob-1 {
  width: 260px;
  height: 260px;
  background: var(--yellow);
  top: -80px;
  left: -60px;
}

.blob-2 {
  width: 180px;
  height: 180px;
  background: var(--sky);
  bottom: 60px;
  left: 40%;
  animation-delay: -3s;
}

.blob-3 {
  width: 120px;
  height: 120px;
  background: var(--pink);
  top: 90px;
  right: 6%;
  animation-delay: -5s;
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 48px;
}

h1 {
  isolation: isolate;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  margin-bottom: 20px;
}

.highlight {
  position: relative;
  color: var(--purple);
  white-space: nowrap;
}

.highlight::after {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  bottom: 6px;
  height: 18px;
  background: var(--yellow);
  border-radius: 8px;
  z-index: -1;
  transform: rotate(-2deg);
}

.lead {
  font-size: 1.2rem;
  color: var(--ink-soft);
  max-width: 540px;
  margin-bottom: 32px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
}

.stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.stats li {
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: var(--border);
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0 4px 0 var(--ink);
}

.stats b {
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  line-height: 1.2;
}

.stats span {
  font-size: 0.9rem;
  color: var(--ink-soft);
  font-weight: 700;
}

.hero-visual {
  position: relative;
  max-width: 420px;
  margin-inline: auto;
  width: 100%;
}

.sun {
  position: absolute;
  inset: 8% 6%;
  border-radius: 50%;
  background: radial-gradient(circle, #fde68a 0%, #fbbf24 60%, #f59e0b 100%);
  border: var(--border);
  box-shadow: 0 8px 0 var(--ink);
}

.mascot {
  position: relative;
  animation: float 4s ease-in-out infinite;
}

.bubble {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 8px 18px;
  border: var(--border);
  border-radius: 999px;
  box-shadow: 0 4px 0 var(--ink);
  animation: float 5s ease-in-out infinite;
  transition: scale 0.15s ease;
}

.bubble:hover {
  scale: 1.1;
}

.bubble-flag {
  font-size: 1.1rem;
}

.bubble-0 {
  top: 4%;
  left: -12%;
  --r: -6deg;
}

.bubble-1 {
  top: 38%;
  right: -14%;
  --r: 5deg;
  animation-delay: -1.5s;
}

.bubble-2 {
  bottom: 8%;
  left: -8%;
  --r: -3deg;
  animation-delay: -3s;
}

.wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 80px;
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .lead {
    margin-inline: auto;
  }

  .actions,
  .stats {
    justify-content: center;
  }

  .hero-visual {
    max-width: 300px;
  }

  .bubble {
    font-size: 1rem;
    padding: 6px 14px;
  }

  .bubble-0 {
    left: -6%;
  }

  .bubble-1 {
    right: -8%;
  }

  .bubble-2 {
    left: -4%;
  }
}
</style>
