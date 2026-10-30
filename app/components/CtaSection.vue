<script setup lang="ts">
import MascotGlobe from '~/components/mascots/MascotGlobe.vue'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="cta-wrap">
    <div class="container">
      <div class="cta">
        <div class="confetti" aria-hidden="true">
          <span v-for="i in 14" :key="i" :style="{ '--i': i }" />
        </div>
        <MascotGlobe class="cta-mascot" />
        <div class="cta-text">
          <h2>{{ t('cta.title') }}</h2>
          <i18n-t keypath="cta.text" tag="p" scope="global">
            <template #trial>
              <b>{{ t('cta.trial') }}</b>
            </template>
          </i18n-t>
          <NuxtLink :to="localePath('/') + '#apps'" class="btn btn-yellow">{{ t('cta.button') }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-wrap {
  padding: 40px 0 96px;
}

.cta {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 220px 1fr;
  align-items: center;
  gap: 40px;
  padding: 48px;
  color: var(--on-color);
  background: linear-gradient(120deg, var(--pink) 0%, var(--purple) 60%, #4f46e5 100%);
  border: var(--border);
  border-radius: 40px;
  box-shadow: 0 10px 0 var(--ink);
}

.cta-mascot {
  position: relative;
  width: 100%;
  max-width: 220px;
  animation: float 4s ease-in-out infinite;
}

/* слой конфетти не должен занимать ячейку сетки */
.confetti {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-text {
  position: relative;
}

.cta h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 12px;
}

.cta p {
  font-size: 1.2rem;
  opacity: 0.92;
  margin-bottom: 28px;
  max-width: 560px;
}

.confetti span {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  top: calc(var(--i) * 7% - 10%);
  left: calc(var(--i) * 7%);
  background: var(--yellow);
  opacity: 0.8;
  transform: rotate(calc(var(--i) * 37deg));
  animation: float calc(3s + var(--i) * 0.3s) ease-in-out infinite;
}

.confetti span:nth-child(3n) {
  background: var(--sky);
  border-radius: 50%;
}

.confetti span:nth-child(3n + 1) {
  background: var(--green);
}

@media (max-width: 720px) {
  .cta {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 32px 20px;
    gap: 16px;
  }

  .cta-mascot {
    max-width: 150px;
    margin-inline: auto;
  }

  .cta p {
    margin-inline: auto;
  }
}
</style>
