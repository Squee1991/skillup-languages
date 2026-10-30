<script setup lang="ts">
import { languages, platformMeta, type Language, type Platform } from '~/data/languages'
import LanguageMascot from '~/components/LanguageMascot.vue'

const platforms: Platform[] = ['android', 'ios', 'web']

const steps = ['Выбери язык', 'Выбери платформу', 'Скачай и учись']

// для каждой платформы: готово / скоро / нет
const statusOf = (lang: Language, p: Platform) => {
  const app = lang.apps.find((a) => a.platform === p)
  if (!app) return 'none'
  return app.comingSoon ? 'soon' : 'ready'
}
</script>

<template>
  <section id="apps" class="catalog">
    <div class="container">
      <span class="tag tag-center">🗺️ Каталог</span>
      <h2 class="section-title">Какой язык будем учить?</h2>
      <p class="section-subtitle">
        Нажми на язык — покажем все его приложения для Android, iOS и браузера.
      </p>

      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s" :class="{ current: i === 0 }">
          <span class="step-num">{{ i + 1 }}</span>
          {{ s }}
        </li>
      </ol>

      <div class="languages">
        <NuxtLink
          v-for="lang in languages"
          :key="lang.id"
          :to="`/languages/${lang.id}`"
          class="lang-card"
          :style="{ '--accent': lang.color, '--accent-soft': lang.colorSoft }"
        >
          <span class="lang-top">
            <span class="greeting">{{ lang.greeting }}</span>
            <span class="lang-pic">
              <LanguageMascot :id="lang.id" />
            </span>
          </span>

          <span class="lang-body">
            <span class="lang-title">
              <FlagIcon :id="lang.id" class="lang-flag" />
              <span>
                <span class="lang-name">{{ lang.name }}</span>
                <span class="lang-native">{{ lang.nativeName }} · {{ lang.levels }}</span>
              </span>
            </span>

            <span class="lang-tagline">{{ lang.tagline }}</span>

            <span class="platforms">
              <span
                v-for="p in platforms"
                :key="p"
                class="platform"
                :class="statusOf(lang, p)"
                :title="statusOf(lang, p) === 'soon' ? 'Скоро' : platformMeta[p].label"
              >
                {{ platformMeta[p].icon }} {{ platformMeta[p].label }}
                <b v-if="statusOf(lang, p) === 'ready'">✓</b>
                <b v-else-if="statusOf(lang, p) === 'soon'">скоро</b>
              </span>
            </span>

            <span class="lang-learners">👥 {{ lang.learners }} учеников</span>

            <span class="lang-btn">Выбрать {{ lang.name.toLowerCase() }} →</span>
          </span>
        </NuxtLink>
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
  margin-bottom: 24px;
}

.tag-center {
  display: table;
  margin: 0 auto 16px;
  color: var(--ink);
}

.steps {
  list-style: none;
  padding: 0;
  margin: 0 auto 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 28px;
}

.steps li {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  color: #ddd6fe;
}

.steps li:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -21px;
  color: #a78bfa;
}

.steps li.current {
  color: var(--white);
}

.step-num {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  font-size: 0.9rem;
  color: var(--ink);
  background: #c4b5fd;
  border: var(--border);
  border-radius: 50%;
}

.steps li.current .step-num {
  background: var(--yellow);
  animation: wiggle 1.4s ease-in-out infinite;
}

.languages {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.lang-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  color: var(--ink);
  background: var(--white);
  border: var(--border);
  border-radius: 32px;
  box-shadow: var(--shadow-pop);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lang-card:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: 0 14px 0 var(--ink);
}

.lang-card:active {
  transform: translateY(2px);
  box-shadow: 0 3px 0 var(--ink);
}

.lang-top {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 24px 16px 12px;
  background: var(--accent-soft);
  border-bottom: var(--border);
}

.lang-pic {
  width: 140px;
  transition: transform 0.25s ease;
}

.lang-card:hover .lang-pic {
  transform: scale(1.08) rotate(-3deg);
}

.greeting {
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  padding: 2px 12px;
  background: var(--white);
  border: var(--border);
  border-radius: 14px 14px 14px 4px;
  rotate: 4deg;
}

.lang-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 14px;
  padding: 20px 22px 22px;
}

.lang-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang-flag {
  font-size: 1.8rem;
}

.lang-name {
  display: block;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 1.1;
}

.lang-native {
  display: block;
  font-weight: 800;
  font-size: 0.9rem;
  color: var(--accent);
}

.lang-tagline {
  color: var(--ink-soft);
  font-weight: 600;
  flex: 1;
}

.platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.platform {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 800;
  font-size: 0.82rem;
  padding: 4px 10px;
  border: 2px solid var(--ink);
  border-radius: 999px;
}

.platform.ready {
  background: #dcfce7;
}

.platform.ready b {
  color: #16a34a;
}

.platform.soon {
  background: #f1f5f9;
  color: #64748b;
  border-style: dashed;
}

.platform.soon b {
  font-size: 0.72rem;
  text-transform: uppercase;
}

.platform.none {
  display: none;
}

.lang-learners {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink-soft);
}

.lang-btn {
  display: block;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.15rem;
  padding: 12px 16px;
  color: var(--white);
  background: var(--accent);
  border: var(--border);
  border-radius: 999px;
  box-shadow: 0 5px 0 var(--ink);
  transition: transform 0.15s ease;
}

.lang-card:hover .lang-btn {
  transform: scale(1.03);
}

@media (max-width: 960px) {
  .languages {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin-inline: auto;
    gap: 22px;
  }

  /* на телефоне: маскот слева, текст справа — карточка ниже */
  .lang-card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }

  .lang-top {
    align-items: center;
    padding: 12px;
    border-bottom: 0;
    border-right: var(--border);
  }

  .lang-pic {
    width: 96px;
  }

  .greeting {
    top: 8px;
    right: auto;
    left: 8px;
    font-size: 0.8rem;
    padding: 0 8px;
  }

  .lang-body {
    gap: 10px;
    padding: 16px;
  }

  .lang-name {
    font-size: 1.4rem;
  }

  .lang-flag {
    font-size: 1.3rem;
  }

  .lang-tagline,
  .lang-learners {
    display: none;
  }

  .lang-btn {
    font-size: 0.95rem;
    padding: 8px 10px;
    white-space: nowrap;
  }
}

@media (max-width: 600px) {
  /* шаги — три колонки, номер над текстом */
  .steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 28px;
  }

  .steps li {
    flex-direction: column;
    text-align: center;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .steps li:not(:last-child)::after {
    top: 4px;
    right: -10px;
  }
}

@media (max-width: 420px) {
  .lang-body {
    min-width: 0;
    padding: 14px 12px;
  }

  .lang-btn {
    font-size: 0.85rem;
    padding: 8px 6px;
  }
}

@media (max-width: 380px) {
  .lang-card {
    grid-template-columns: 96px 1fr;
  }

  .lang-pic {
    width: 76px;
  }
}
</style>
