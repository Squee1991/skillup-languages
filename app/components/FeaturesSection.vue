<script setup lang="ts">
const { t } = useI18n()

// тексты — в i18n/locales: features.items.<key>
const features = [
  { key: 'games', icon: '🎮', color: '#fde68a' },
  { key: 'minutes', icon: '⏱️', color: '#bae6fd' },
  { key: 'speech', icon: '🗣️', color: '#fbcfe8' },
  { key: 'streaks', icon: '🔥', color: '#fed7aa' },
  { key: 'anywhere', icon: '📱', color: '#bbf7d0' },
  { key: 'levels', icon: '🎯', color: '#ddd6fe' }
]

// лента листается нативно (тачпад, свайп) по одной карточке; в ряд всегда помещается целое число карточек
const track = ref<HTMLElement>()
const active = ref(0)
// сколько позиций можно пролистать: при 3 карточках в ряд из 6 — это 4 позиции
const positions = ref(features.length)

const step = () => {
  const card = track.value?.querySelector<HTMLElement>('.feature')
  return card ? card.offsetWidth + 24 : 300
}

const measure = () => {
  const el = track.value
  if (!el) return
  const perView = Math.max(1, Math.round((el.clientWidth + 24) / step()))
  positions.value = features.length - perView + 1
  active.value = Math.min(positions.value - 1, Math.round(el.scrollLeft / step()))
}

const goTo = (i: number) => {
  const target = Math.min(Math.max(i, 0), positions.value - 1)
  track.value?.scrollTo({ left: target * step(), behavior: 'smooth' })
}

onMounted(() => {
  measure()
  window.addEventListener('resize', measure)
})
onBeforeUnmount(() => window.removeEventListener('resize', measure))
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <span class="tag tag-center">{{ t('features.tag') }}</span>
      <h2 class="section-title">{{ t('features.title') }}</h2>
      <p class="section-subtitle">{{ t('features.subtitle') }}</p>

      <div ref="track" class="track" @scroll.passive="measure">
          <article
            v-for="(f, i) in features"
            :key="f.key"
            class="feature"
            :style="{ '--c': f.color, '--tilt': (i % 2 ? 1 : -1) + 'deg' }"
          >
            <div class="icon">{{ f.icon }}</div>
            <h3>{{ t(`features.items.${f.key}.title`) }}</h3>
            <p>{{ t(`features.items.${f.key}.text`) }}</p>
          </article>
      </div>

      <!-- стрелки и точки — под лентой, ничего не перекрывают -->
      <div class="controls">
        <button class="arrow" :disabled="active === 0" aria-label="←" @click="goTo(active - 1)">←</button>
        <div class="dots">
          <button
            v-for="i in positions"
            :key="i"
            class="dot"
            :class="{ active: i - 1 === active }"
            :aria-label="String(i)"
            @click="goTo(i - 1)"
          />
        </div>
        <button class="arrow" :disabled="active === positions - 1" aria-label="→" @click="goTo(active + 1)">→</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tag-center {
  display: table;
  margin: 0 auto 16px;
}

/* одна лента карточек, листается вбок с «примагничиванием» к карточке */
.track {
  display: flex;
  gap: 24px;
  /* отступы под тень и наклон при наведении; ширина содержимого остаётся равной контейнеру */
  padding: 14px 6px 26px;
  margin: -14px -6px 0;
  scroll-padding-inline: 6px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  overscroll-behavior-x: contain;
}

.track::-webkit-scrollbar {
  display: none;
}

/* ровно 3 карточки в ряд — без обрезанных краёв */
.feature {
  flex: 0 0 calc((100% - 48px) / 3);
  scroll-snap-align: start;
  background: var(--white);
  border: var(--border);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow-pop);
  transition: transform 0.2s ease;
}

.feature:hover {
  transform: rotate(var(--tilt)) translateY(-6px);
}

.icon {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  font-size: 2.2rem;
  background: var(--c);
  border: var(--border);
  border-radius: 50% 40% 55% 45%;
  margin-bottom: 18px;
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.feature p {
  color: var(--ink-soft);
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 4px;
}

.arrow {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text);
  background: var(--white);
  border: var(--border);
  border-radius: 50%;
  box-shadow: 0 4px 0 var(--ink);
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.2s ease;
}

.arrow:hover:not(:disabled) {
  transform: translateY(-2px) scale(1.06);
  color: var(--ink);
  background: var(--yellow);
}

.arrow:active:not(:disabled) {
  transform: translateY(3px);
  box-shadow: 0 1px 0 var(--ink);
}

.arrow:disabled {
  opacity: 0.35;
  cursor: default;
}

.dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  padding: 0;
  background: #e9d5ff;
  border: 2px solid var(--ink);
  border-radius: 999px;
  cursor: pointer;
  transition: width 0.3s ease, background 0.3s ease;
}

.dot.active {
  width: 32px;
  background: var(--purple);
}

/* планшет — 2 карточки в ряд */
@media (max-width: 960px) {
  .feature {
    flex-basis: calc((100% - 24px) / 2);
  }
}

/* телефон — 1 карточка на всю ширину */
@media (max-width: 620px) {
  .feature {
    flex-basis: 100%;
  }
}
</style>
