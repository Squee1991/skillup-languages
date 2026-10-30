<script setup lang="ts">
import { languages, platformMeta, type Platform } from '~/data/languages'
import AppCard from '~/components/AppCard.vue'
import LanguageMascot from '~/components/LanguageMascot.vue'

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
          <span class="lang-pic">
            <LanguageMascot :id="lang.id" />
            <FlagIcon :id="lang.id" class="lang-flag" />
          </span>
          <span class="lang-name">{{ lang.name }}</span>
          <span class="lang-native">{{ lang.nativeName }}</span>
          <span class="lang-learners">👥 {{ lang.learners }} учеников</span>
        </button>
      </div>

      <div class="panel" :style="{ '--accent': active.color, '--accent-soft': active.colorSoft }">
        <div class="panel-head">
          <h3>
            <FlagIcon :id="active.id" /> {{ active.name }}: {{ active.greeting }}
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
          <AppCard v-for="app in apps" :key="active.id + app.platform" :app="app" />
        </TransitionGroup>

        <p v-if="!apps.length" class="empty">
          🦉 Для этой платформы приложение пока в разработке — загляни позже!
        </p>

        <div class="more">
          <NuxtLink :to="`/languages/${active.id}`" class="btn btn-yellow">
            <FlagIcon :id="active.id" /> Всё о курсе {{ active.nameGenitive }} →
          </NuxtLink>
        </div>
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

.lang-pic {
  position: relative;
  width: 110px;
  margin-bottom: 6px;
}

.lang-flag {
  position: absolute;
  right: -10px;
  bottom: -4px;
  font-size: 1.5rem;
  line-height: 1;
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

.empty {
  text-align: center;
  font-weight: 700;
  padding: 24px;
}

.more {
  display: flex;
  justify-content: center;
  margin-top: 32px;
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
    min-width: 0;
  }

  .lang-pic {
    width: 70px;
  }

  .lang-flag {
    font-size: 1rem;
    right: -6px;
  }

  .lang-name {
    font-size: 0.95rem;
  }

  .lang-learners {
    display: none;
  }

  .panel {
    padding: 22px 14px;
  }

  .panel-head h3 {
    font-size: 1.5rem;
  }

  .apps {
    gap: 16px;
  }

  .more .btn {
    width: 100%;
    justify-content: center;
    font-size: 1rem;
  }
}
</style>
