<script setup lang="ts">
import { languages, platformMeta, type Platform } from '~/data/languages'

const activeId = ref(languages[0]!.id)
const platform = ref<Platform | 'all'>('all')

const active = computed(() => languages.find((l) => l.id === activeId.value)!)
const apps = computed(() =>
  platform.value === 'all' ? active.value.apps : active.value.apps.filter((a) => a.platform === platform.value)
)

const filters: { id: Platform | 'all'; label: string }[] = [
  { id: 'all', label: '✨ Все' },
  { id: 'android', label: `${platformMeta.android.icon} Android` },
  { id: 'ios', label: `${platformMeta.ios.icon} iOS` },
  { id: 'web', label: `${platformMeta.web.icon} Сайт` }
]
</script>

<template>
  <section id="apps" class="catalog">
    <div class="container">
      <span class="tag tag-center">🗺️ Каталог</span>
      <h2 class="section-title">Какой язык будем учить?</h2>
      <p class="section-subtitle">
        Выбери язык и платформу — и сразу переходи к нужному приложению.
      </p>

      <div class="languages" role="tablist">
        <button
          v-for="lang in languages"
          :key="lang.id"
          role="tab"
          :aria-selected="lang.id === activeId"
          class="lang-card"
          :class="{ active: lang.id === activeId }"
          :style="{ '--accent': lang.color, '--accent-soft': lang.colorSoft }"
          @click="activeId = lang.id"
        >
          <span class="lang-flag">{{ lang.flag }}</span>
          <span class="lang-name">{{ lang.name }}</span>
          <span class="lang-native">{{ lang.nativeName }}</span>
          <span class="lang-learners">👥 {{ lang.learners }} учеников</span>
        </button>
      </div>

      <div class="panel" :style="{ '--accent': active.color, '--accent-soft': active.colorSoft }">
        <div class="panel-head">
          <h3>
            <span>{{ active.flag }}</span> {{ active.name }}: {{ active.greeting }}
          </h3>
          <div class="filters">
            <button
              v-for="f in filters"
              :key="f.id"
              class="filter"
              :class="{ active: platform === f.id }"
              @click="platform = f.id"
            >
              {{ f.label }}
            </button>
          </div>
        </div>

        <TransitionGroup name="card" tag="div" class="apps">
          <article
            v-for="app in apps"
            :key="active.id + app.platform"
            class="app-card"
            :class="{ soon: app.comingSoon }"
          >
            <span v-if="app.badge" class="badge">{{ app.badge }}</span>
            <div class="app-icon">{{ platformMeta[app.platform].icon }}</div>
            <p class="app-platform">{{ platformMeta[app.platform].label }}</p>
            <h4>{{ app.title }}</h4>
            <p class="app-desc">{{ app.description }}</p>

            <span v-if="app.comingSoon" class="btn btn-secondary app-btn disabled">⏳ Скоро</span>
            <a v-else :href="app.url" target="_blank" rel="noopener" class="btn btn-primary app-btn">
              {{ platformMeta[app.platform].store }} →
            </a>
          </article>
        </TransitionGroup>

        <p v-if="!apps.length" class="empty">
          🦉 Для этой платформы приложение пока в разработке — загляни позже!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.catalog {
  background: var(--purple);
  color: var(--white);
  padding: 72px 0 110px;
  margin-top: -1px;
}

.catalog .section-subtitle {
  color: #ddd6fe;
}

.tag-center {
  display: table;
  margin: 0 auto 16px;
  color: var(--ink);
}

.languages {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.lang-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-family: inherit;
  color: var(--ink);
  background: var(--white);
  border: var(--border);
  border-radius: var(--radius);
  padding: 24px 16px;
  box-shadow: var(--shadow-pop);
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease;
}

.lang-card:hover {
  transform: translateY(-4px) rotate(-1deg);
}

.lang-card.active {
  background: var(--accent-soft);
  transform: translateY(-6px);
  box-shadow: 0 10px 0 var(--ink);
}

.lang-flag {
  font-size: 3.4rem;
  line-height: 1.2;
}

.lang-card.active .lang-flag {
  animation: wiggle 1.2s ease-in-out infinite;
}

.lang-name {
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.6rem;
}

.lang-native {
  font-weight: 700;
  color: var(--accent);
}

.lang-learners {
  margin-top: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink-soft);
}

.panel {
  background: var(--accent-soft);
  color: var(--ink);
  border: var(--border);
  border-radius: 36px;
  padding: 32px;
  box-shadow: 0 10px 0 var(--ink);
  transition: background 0.3s ease;
}

.panel-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
}

.panel-head h3 {
  font-size: 2rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter {
  font-family: inherit;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 8px 16px;
  border: var(--border);
  border-radius: 999px;
  background: var(--white);
  color: var(--ink);
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
}

.filter:hover {
  transform: translateY(-2px);
}

.filter.active {
  background: var(--ink);
  color: var(--white);
}

.apps {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.app-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--white);
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

.empty {
  text-align: center;
  font-weight: 700;
  padding: 24px;
}

.card-enter-active {
  animation: pop-in 0.35s ease both;
}

.card-leave-active {
  display: none;
}

@media (max-width: 720px) {
  .languages {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .lang-card {
    padding: 14px 6px;
  }

  .lang-flag {
    font-size: 2.4rem;
  }

  .lang-name {
    font-size: 1.1rem;
  }

  .lang-learners {
    display: none;
  }

  .panel {
    padding: 22px 14px;
  }

  .apps {
    gap: 16px;
  }

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
  .app-btn {
    grid-column: 1 / -1;
  }

  .app-desc {
    font-size: 0.95rem;
    margin: 6px 0 14px;
  }

  .panel-head h3 {
    font-size: 1.5rem;
  }
}
</style>
