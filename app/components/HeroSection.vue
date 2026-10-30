<script setup lang="ts">
import { languages, soft } from '~/data/languages'
import MascotGlobe from '~/components/mascots/MascotGlobe.vue'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="hero">
    <div class="blob blob-1" />
    <div class="blob blob-2" />
    <div class="blob blob-3" />

    <div class="container hero-inner">
      <div class="hero-text">
        <h1>
          {{ t('hero.before') }} <span class="highlight">{{ t('hero.highlight') }}</span> {{ t('hero.after') }}
        </h1>
        <p class="lead">{{ t('hero.lead') }}</p>

        <div class="actions">
          <a href="#apps" class="btn btn-primary">{{ t('hero.findApp') }}</a>
          <a href="#how" class="btn btn-secondary">{{ t('hero.howItWorks') }}</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="sun" />
        <MascotGlobe class="mascot" />
        <NuxtLink
          v-for="(lang, i) in languages"
          :key="lang.id"
          :to="localePath(`/languages/${lang.id}`)"
          class="bubble"
          :class="'bubble-' + i"
          :style="{ background: soft(lang.color) }"
        >
          <FlagIcon :id="lang.id" class="bubble-flag" />
          {{ lang.greeting }}
        </NuxtLink>
      </div>
    </div>

    <svg class="wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 40 C240 90 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z" style="fill: var(--catalog-bg)" />
    </svg>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 72px 0 140px;
  background: var(--hero-bg);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0.55;
  animation: float 8s ease-in-out infinite;
}

:global(.dark .hero .blob) {
  opacity: 0.22;
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
  bottom: 14px;
  height: 14px;
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
  right: -6%;
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

  .actions {
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
    right: -2%;
  }

  .bubble-2 {
    left: -4%;
  }
}
</style>
