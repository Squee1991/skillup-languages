<script setup lang="ts">
import { languages, platforms, soft, type Language, type Platform } from '~/data/languages'
import LanguageMascot from '~/components/LanguageMascot.vue'

const { t } = useI18n()
const { l, count } = useL10n()
const localePath = useLocalePath()

const steps = [
  { icon: '🌍', key: 'language', color: 'var(--yellow)' },
  { icon: '📱', key: 'platform', color: '#f9a8d4' },
  { icon: '🚀', key: 'start', color: '#86efac' }
]

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
      <h2 class="section-title">{{ t('catalog.title') }}</h2>
      <p class="section-subtitle">{{ t('catalog.subtitle') }}</p>

      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.key" :style="{ '--c': s.color, '--d': i * 0.3 + 's' }">
          <span class="step-circle">
            {{ s.icon }}
            <span class="step-num">{{ i + 1 }}</span>
          </span>
          <span class="step-label">{{ t(`catalog.steps.${s.key}`) }}</span>
        </li>
      </ol>

      <div class="languages">
        <NuxtLink
          v-for="lang in languages"
          :key="lang.id"
          :to="localePath(`/languages/${lang.id}`)"
          class="lang-card"
          :style="{ '--accent': lang.color, '--accent-soft': soft(lang.color) }"
        >
          <span class="lang-top">
            <span class="greeting">{{ lang.greeting }}</span>
            <span class="lang-pic">
              <LanguageMascot :id="lang.id" />
            </span>
          </span>

          <span class="lang-body">
            <span class="lang-title">
              <span class="lang-name"><FlagIcon :id="lang.id" class="lang-flag" />{{ l(lang.name) }}</span>
              <span class="lang-native">{{ lang.nativeName }}</span>
            </span>

            <span class="lang-tagline">{{ l(lang.tagline) }}</span>

            <span class="platforms">
              <span
                v-for="p in platforms"
                :key="p"
                class="platform"
                :class="statusOf(lang, p)"
                :title="t(`platform.${p}`)"
              >
                <PlatformIcon :platform="p" /> {{ t(`platform.${p}`) }}
                <b v-if="statusOf(lang, p) === 'ready'">✓</b>
                <b v-else-if="statusOf(lang, p) === 'soon'">{{ t('catalog.soon') }}</b>
              </span>
            </span>

            <span class="lang-learners">👥 {{ t('catalog.learners', { count: count(lang.learners) }) }}</span>

            <span class="lang-btn">{{ t('catalog.choose', { name: l(lang.nameAcc) }) }}</span>
          </span>
        </NuxtLink>
      </div>
    </div>
    <WaveDivider position="bottom" />
  </section>
</template>

<style scoped>
.catalog {
  position: relative;
  background: var(--catalog-bg);
  color: var(--on-color);
  transition: background-color 0.3s ease;
  padding: 72px 0 110px;
  margin-top: -1px;
}

.catalog .section-subtitle {
  color: #ddd6fe;
  margin-bottom: 24px;
}

/* шаги — дорожка из трёх остановок */
.steps {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0 auto 48px;
  max-width: 640px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* сама дорожка: пунктир, по которому «бегут» штрихи */
.steps::before {
  content: '';
  position: absolute;
  top: 31px;
  left: calc(100% / 6);
  right: calc(100% / 6);
  height: 6px;
  border-radius: 6px;
  background: repeating-linear-gradient(90deg, #fde68a 0 14px, transparent 14px 26px);
  animation: road 1.2s linear infinite;
}

.steps li {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.step-circle {
  position: relative;
  display: grid;
  place-items: center;
  width: 68px;
  height: 68px;
  font-size: 1.9rem;
  background: var(--c);
  border: var(--border);
  border-radius: 50%;
  box-shadow: 0 5px 0 var(--ink);
  animation: bob 2.4s ease-in-out infinite;
  animation-delay: var(--d);
}

.step-num {
  position: absolute;
  top: -6px;
  right: -6px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  font-family: 'Baloo 2', sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--on-color);
  background: var(--ink);
  border-radius: 50%;
}

.step-label {
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 1.2;
  color: var(--on-color);
}

@keyframes bob {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -5px;
  }
}

@keyframes road {
  to {
    background-position: 26px 0;
  }
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
  color: var(--text);
  background: var(--white);
  border: var(--border);
  border-radius: 32px;
  box-shadow: var(--card-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lang-card:hover {
  transform: translateY(-8px) rotate(-1deg);
  box-shadow: 0 18px 32px rgba(30, 27, 75, 0.4);
}

.lang-card:active {
  transform: translateY(2px);
  box-shadow: 0 4px 12px rgba(30, 27, 75, 0.35);
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
  flex-direction: column;
}

/* флаг стоит прямо перед названием, в одну строку */
.lang-flag {
  margin-right: 10px;
  font-size: 0.8em;
  vertical-align: 0.02em;
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
  background: color-mix(in srgb, var(--green) 22%, var(--white));
}

.platform.ready b {
  color: var(--green);
}

.platform.soon {
  background: var(--surface-muted);
  color: var(--ink-soft);
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
  color: var(--on-color);
  background: var(--accent);
  border: var(--border);
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(30, 27, 75, 0.25);
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
  .steps {
    margin-bottom: 32px;
  }

  .steps::before {
    top: 24px;
    height: 5px;
  }

  .step-circle {
    width: 52px;
    height: 52px;
    font-size: 1.4rem;
  }

  .step-num {
    width: 22px;
    height: 22px;
    font-size: 0.8rem;
  }

  .step-label {
    font-size: 0.85rem;
  }
}

@media (max-width: 420px) {
  .steps::before {
    top: 20px;
    height: 4px;
  }

  .step-circle {
    width: 44px;
    height: 44px;
    font-size: 1.15rem;
    box-shadow: 0 3px 0 var(--ink);
  }

  .step-num {
    top: -5px;
    right: -5px;
    width: 18px;
    height: 18px;
    font-size: 0.7rem;
  }

  .step-label {
    font-size: 0.75rem;
  }

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
