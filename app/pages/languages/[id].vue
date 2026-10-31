<script setup lang="ts">
import { findLanguage, languages, soft } from '~/data/languages'
import AppCard from '~/components/AppCard.vue'
import LanguageMascot from '~/components/LanguageMascot.vue'
import CtaSection from '~/components/CtaSection.vue'

const route = useRoute()
const { t } = useI18n()
const { l, count } = useL10n()
const localePath = useLocalePath()
const lang = findLanguage(route.params.id as string)

if (!lang) {
  throw createError({ statusCode: 404, statusMessage: 'Not found', fatal: true })
}

const others = languages.filter((o) => o.id !== lang.id)
const ready = computed(() =>
  lang.apps
    .filter((a) => !a.comingSoon)
    .map((a) => t(`platform.${a.platform}`))
    .join(', ')
)
const flipped = ref(new Set<number>())

const toggle = (i: number) => {
  const next = new Set(flipped.value)
  next.has(i) ? next.delete(i) : next.add(i)
  flipped.value = next
}

useSeoMeta({
  title: () => t('lang.metaTitle', { name: l(lang.name) }),
  description: () => t('lang.metaDescription', { tagline: l(lang.tagline), name: l(lang.nameGen) })
})
</script>

<template>
  <div :style="{ '--accent': lang!.color, '--accent-soft': soft(lang!.color) }">
    <!-- Шапка языка -->
    <section class="lang-hero">
      <div class="container">
        <NuxtLink :to="localePath('/') + '#apps'" class="back-link">{{ t('lang.back') }}</NuxtLink>
      </div>
      <div class="container hero-grid">
        <div>
          <h1>
            <FlagIcon :id="lang!.id" class="flag" />
            {{ l(lang!.name) }}
            <span class="native">{{ lang!.nativeName }}</span>
          </h1>
          <p class="tagline">{{ l(lang!.tagline) }}</p>
          <p class="about">{{ l(lang!.about) }}</p>

          <p class="intro">
            <b>{{ l(lang!.mascot.name) }}:</b> {{ l(lang!.mascot.intro) }}
          </p>

          <ul class="chips">
            <li>{{ t('lang.learners', { count: count(lang!.learners) }) }}</li>
            <li>{{ t('lang.ready', { list: ready }) }}</li>
          </ul>

          <a href="#platforms" class="btn btn-primary">{{ t('lang.chooseApp') }}</a>
        </div>

        <div class="visual">
          <div class="circle" />
          <LanguageMascot :id="lang!.id" class="owl" />
          <span class="bubble">{{ lang!.greeting }}</span>
          <span class="name-tag">{{ l(lang!.mascot.name) }}</span>
        </div>
      </div>
    </section>

    <!-- Платформы -->
    <section id="platforms" class="section platforms">
      <div class="container">
        <span class="tag tag-center">{{ t('lang.platformsTag') }}</span>
        <h2 class="section-title">{{ t('lang.platformsTitle', { name: l(lang!.nameAcc), gen: l(lang!.nameGen) }) }}</h2>
        <p class="section-subtitle">{{ t('lang.platformsSubtitle') }}</p>

        <div class="apps">
          <AppCard v-for="app in lang!.apps" :key="app.platform" :app="app" show-features />
        </div>
      </div>
    </section>

    <!-- Зачем учить -->
    <section class="section reasons-section">
      <div class="container">
        <span class="tag tag-center">{{ t('lang.whyTag') }}</span>
        <h2 class="section-title">{{ t('lang.whyTitle', { name: l(lang!.nameAcc), gen: l(lang!.nameGen) }) }}</h2>
        <div class="reasons">
          <article v-for="r in lang!.reasons" :key="r.icon" class="reason">
            <div class="reason-icon">{{ r.icon }}</div>
            <h3>{{ l(r.title) }}</h3>
            <p>{{ l(r.text) }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Программа -->
    <section class="section">
      <div class="container">
        <span class="tag tag-center">{{ t('lang.programTag') }}</span>
        <h2 class="section-title">{{ t('lang.programTitle') }}</h2>
        <div class="program">
          <p v-for="(text, i) in l(lang!.program)" :key="i">
            <template v-for="(part, j) in text.split('*')" :key="j">
              <mark v-if="j % 2">{{ part }}</mark>
              <template v-else>{{ part }}</template>
            </template>
          </p>
        </div>
      </div>
    </section>

    <!-- Фразы -->
    <section class="section phrases-section">
      <div class="container">
        <span class="tag tag-center">{{ t('lang.phrasesTag') }}</span>
        <h2 class="section-title">{{ t('lang.phrasesTitle') }}</h2>
        <p class="section-subtitle">{{ t('lang.phrasesSubtitle') }}</p>

        <div class="phrases">
          <button
            v-for="(p, i) in lang!.phrases"
            :key="p.word"
            class="phrase"
            :class="{ flipped: flipped.has(i) }"
            @click="toggle(i)"
          >
            <span class="phrase-inner">
              <span class="face front">{{ p.word }}</span>
              <span class="face back">{{ l(p.translation) }}</span>
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Другие языки -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('lang.othersTitle') }}</h2>
        <p class="section-subtitle">{{ t('lang.othersSubtitle') }}</p>
        <div class="others">
          <NuxtLink
            v-for="o in others"
            :key="o.id"
            :to="localePath(`/languages/${o.id}`)"
            class="other"
            :style="{ '--accent': o.color, '--accent-soft': soft(o.color) }"
          >
            <LanguageMascot :id="o.id" class="other-mascot" />
            <span>
              <b>{{ l(o.name) }}</b>
              <small><FlagIcon :id="o.id" /> {{ o.nativeName }} · {{ l(o.mascot.name) }}</small>
            </span>
            <span class="arrow">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>

<style scoped>
.lang-hero {
  padding: 48px 0 72px;
  background: linear-gradient(160deg, var(--accent-soft) 0%, var(--bg) 100%);
  border-bottom: var(--border);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 48px;
  align-items: center;
}

.back-link {
  display: inline-block;
  font-weight: 800;
  text-decoration: none;
  padding: 6px 14px;
  background: var(--white);
  border: var(--border);
  border-radius: 999px;
  margin-bottom: 20px;
  transition: transform 0.15s ease;
}

.back-link:hover {
  transform: translateX(-4px);
}

h1 {
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  margin-bottom: 8px;
}

.flag {
  display: inline-block;
  font-size: 0.7em;
  animation: wiggle 2s ease-in-out infinite;
}

.native {
  display: block;
  font-size: 0.45em;
  color: var(--accent);
}

.intro {
  position: relative;
  max-width: 600px;
  margin-bottom: 24px;
  padding: 14px 18px;
  font-weight: 700;
  background: var(--white);
  border: var(--border);
  border-radius: 20px;
  box-shadow: 0 4px 0 var(--ink);
}

.intro b {
  color: var(--accent);
}

.tagline {
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.about {
  color: var(--ink-soft);
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 24px;
}

.chips {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chips li {
  font-weight: 800;
  font-size: 0.95rem;
  padding: 6px 14px;
  background: var(--white);
  border: var(--border);
  border-radius: 999px;
}

.visual {
  position: relative;
  max-width: 320px;
  width: 100%;
  margin-inline: auto;
}

.circle {
  position: absolute;
  inset: 6%;
  border-radius: 50%;
  background: var(--accent);
  border: var(--border);
  box-shadow: 0 8px 0 var(--ink);
}

.owl {
  position: relative;
  animation: float 4s ease-in-out infinite;
}

.bubble {
  position: absolute;
  top: 0;
  right: -4%;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  padding: 8px 18px;
  background: var(--white);
  border: var(--border);
  border-radius: 20px 20px 20px 4px;
  box-shadow: 0 4px 0 var(--ink);
  animation: float 5s ease-in-out infinite;
  --r: 6deg;
}

.name-tag {
  position: absolute;
  left: 50%;
  bottom: -6px;
  translate: -50% 0;
  white-space: nowrap;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  padding: 4px 16px;
  color: var(--on-color);
  background: var(--ink);
  border-radius: 999px;
  rotate: -3deg;
}

.tag-center {
  display: table;
  margin: 0 auto 16px;
}

.platforms {
  background: var(--accent-soft);
  border-bottom: var(--border);
}

.apps {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.reasons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.reason {
  background: var(--white);
  border: var(--border);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow-pop);
  transition: transform 0.2s ease;
}

.reason:hover {
  transform: translateY(-6px) rotate(-1deg);
}

.reason-icon {
  font-size: 2.6rem;
  margin-bottom: 10px;
}

.reason h3 {
  font-size: 1.5rem;
  margin-bottom: 6px;
}

.reason p {
  color: var(--ink-soft);
}

.program {
  display: grid;
  gap: 16px;
  max-width: 820px;
  margin: 40px auto 0;
  padding: 32px 36px;
  font-size: 1.2rem;
  line-height: 1.9;
  background: var(--white);
  border: var(--border);
  border-radius: var(--radius);
  box-shadow: var(--card-shadow);
}

/* ключевые темы выделены маркером в цвет языка */
.program mark {
  font-weight: 800;
  color: var(--text);
  background: var(--accent-soft);
  padding: 2px 8px;
  border-radius: 8px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.phrases-section {
  background: linear-gradient(180deg, var(--sky-soft) 0%, var(--accent-soft) 100%);
  border-block: var(--border);
}

.phrases {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.phrase {
  height: 150px;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  perspective: 800px;
}

.phrase-inner {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.phrase.flipped .phrase-inner {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 16px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  text-align: center;
  border: var(--border);
  border-radius: var(--radius);
  box-shadow: 0 6px 0 var(--ink);
  backface-visibility: hidden;
}

.front {
  background: var(--white);
}

.back {
  background: var(--accent);
  color: var(--on-color);
  transform: rotateY(180deg);
}

.others {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  max-width: 760px;
  margin-inline: auto;
}

.other {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  padding: 18px 22px;
  background: var(--accent-soft);
  border: var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-pop);
  transition: transform 0.15s ease;
}

.other:hover {
  transform: translateY(-4px) rotate(-1deg);
}

.other-mascot {
  flex-shrink: 0;
  width: 64px;
}

.other b {
  display: block;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.4rem;
  line-height: 1.1;
}

.other small {
  font-weight: 700;
  color: var(--accent);
}

.arrow {
  margin-left: auto;
  font-size: 1.6rem;
  font-weight: 800;
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about {
    margin-inline: auto;
  }

  .intro {
    margin-inline: auto;
    text-align: left;
  }

  .chips {
    justify-content: center;
  }

  .visual {
    max-width: 220px;
    grid-row: 1;
  }

  .reasons {
    grid-template-columns: 1fr;
  }

  .phrases {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 420px) {
  .phrase {
    height: 120px;
  }

  .face {
    font-size: 1.15rem;
  }
}
</style>
