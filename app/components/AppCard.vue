<script setup lang="ts">
import type { AppLink } from '~/data/languages'

defineProps<{
  app: AppLink
  showFeatures?: boolean
}>()

const { t } = useI18n()
const { l } = useL10n()
</script>

<template>
  <article class="app-card" :class="{ soon: app.comingSoon }">
    <span v-if="app.badge" class="badge">{{ l(app.badge) }}</span>
    <div class="app-icon" :class="app.platform"><PlatformIcon :platform="app.platform" /></div>
    <p class="app-platform">{{ t(`platform.${app.platform}`) }}</p>
    <h4>{{ app.title }}</h4>
    <p class="app-desc">{{ l(app.description) }}</p>

    <ul v-if="showFeatures && app.features" class="app-features">
      <li v-for="f in l(app.features)" :key="f">✅ {{ f }}</li>
    </ul>

    <span v-if="app.comingSoon" class="btn btn-secondary app-btn disabled">{{ t('platform.soon') }}</span>
    <a v-else :href="app.url" target="_blank" rel="noopener" class="btn btn-primary app-btn">
      {{ t(`platform.store.${app.platform}`) }} →
    </a>
  </article>
</template>

<style scoped>
/* цвет акцента приходит от родителя через --accent */
.app-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--white);
  color: var(--text);
  border: var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: 0 6px 0 var(--ink);
}

.app-card.soon {
  background: var(--surface-muted);
}

.badge {
  position: absolute;
  top: -14px;
  right: 18px;
  background: var(--pink);
  color: var(--on-color);
  font-weight: 800;
  font-size: 0.85rem;
  padding: 4px 12px;
  border: var(--border);
  border-radius: 999px;
  transform: rotate(4deg);
}

.app-icon {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  font-size: 2.2rem;
  border: var(--border);
  border-radius: 20px;
  margin-bottom: 14px;
}

/* фон значка — в цвет платформы */
.app-icon.android {
  background: color-mix(in srgb, #3ddc84 22%, var(--white));
}

.app-icon.ios {
  background: var(--surface-muted);
  color: var(--text);
}

.app-icon.web {
  background: color-mix(in srgb, #2563eb 20%, var(--white));
}

.app-platform {
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
}

.app-card h4 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.app-desc {
  color: var(--ink-soft);
  flex: 1;
  margin-bottom: 20px;
}

.app-features {
  list-style: none;
  padding: 14px 16px;
  margin: -6px 0 20px;
  display: grid;
  gap: 6px;
  font-weight: 700;
  font-size: 0.95rem;
  background: var(--accent-soft);
  border-radius: 16px;
}

.app-btn {
  justify-content: center;
  font-size: 1rem;
  padding: 10px 20px;
}

.app-btn.disabled {
  cursor: default;
  opacity: 0.7;
  box-shadow: 0 3px 0 var(--ink);
  transform: none;
}

@media (max-width: 720px) {
  /* компактная карточка: иконка слева, текст справа, кнопка снизу */
  .app-card {
    display: grid;
    grid-template-columns: 52px 1fr;
    column-gap: 14px;
    padding: 18px;
  }

  .app-icon {
    grid-row: span 2;
    width: 52px;
    height: 52px;
    font-size: 1.6rem;
    border-radius: 16px;
    margin-bottom: 0;
  }

  .app-platform {
    align-self: end;
  }

  .app-card h4 {
    font-size: 1.3rem;
    margin-bottom: 4px;
  }

  .app-desc,
  .app-features,
  .app-btn {
    grid-column: 1 / -1;
  }

  .app-desc {
    font-size: 0.95rem;
    margin: 6px 0 14px;
  }

  .app-features {
    margin: 0 0 14px;
  }
}
</style>
