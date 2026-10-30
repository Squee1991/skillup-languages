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
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <span class="tag tag-center">{{ t('features.tag') }}</span>
      <h2 class="section-title">{{ t('features.title') }}</h2>
      <p class="section-subtitle">{{ t('features.subtitle') }}</p>

      <div class="grid">
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
    </div>
  </section>
</template>

<style scoped>
.tag-center {
  display: table;
  margin: 0 auto 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.feature {
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

@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
