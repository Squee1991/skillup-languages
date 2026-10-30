<script setup lang="ts">
import { platformMeta, type AppLink } from '~/data/languages'

defineProps<{
  app: AppLink
  showFeatures?: boolean
}>()
</script>

<template>
  <article class="app-card" :class="{ soon: app.comingSoon }">
    <span v-if="app.badge" class="badge">{{ app.badge }}</span>
    <div class="app-icon">{{ platformMeta[app.platform].icon }}</div>
    <p class="app-platform">{{ platformMeta[app.platform].label }}</p>
    <h4>{{ app.title }}</h4>
    <p class="app-desc">{{ app.description }}</p>

    <ul v-if="showFeatures && app.features?.length" class="app-features">
      <li v-for="f in app.features" :key="f">✅ {{ f }}</li>
    </ul>

    <span v-if="app.comingSoon" class="btn btn-secondary app-btn disabled">⏳ Скоро</span>
    <a v-else :href="app.url" target="_blank" rel="noopener" class="btn btn-primary app-btn">
      {{ platformMeta[app.platform].store }} →
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
  color: var(--ink);
  border: var(--border);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: 0 6px 0 var(--ink);
}

.app-card.soon {
  background: #f8fafc;
}

.badge {
  position: absolute;
  top: -14px;
  right: 18px;
  background: var(--pink);
  color: var(--white);
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
  font-size: 2rem;
  background: var(--accent);
  border: var(--border);
  border-radius: 20px;
  margin-bottom: 14px;
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
