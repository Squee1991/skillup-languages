<script setup lang="ts">
import { findLanguage, languages, platformMeta } from '~/data/languages'
import AppCard from '~/components/AppCard.vue'
import LanguageMascot from '~/components/LanguageMascot.vue'
import CtaSection from '~/components/CtaSection.vue'

const route = useRoute()
const lang = findLanguage(route.params.id as string)

if (!lang) {
  throw createError({ statusCode: 404, statusMessage: 'Такого языка пока нет', fatal: true })
}

const others = languages.filter((l) => l.id !== lang.id)
const readyApps = lang.apps.filter((a) => !a.comingSoon)
const flipped = ref(new Set<number>())

const toggle = (i: number) => {
  const next = new Set(flipped.value)
  next.has(i) ? next.delete(i) : next.add(i)
  flipped.value = next
}

useSeoMeta({
  title: `${lang.name} язык — SkillUp Languages`,
  description: `${lang.tagline}. Приложения для изучения ${lang.nameGenitive} на Android, iOS и в браузере.`
})
</script>

<template>
  <div :style="{ '--accent': lang!.color, '--accent-soft': lang!.colorSoft }">
    <!-- Шапка языка -->
    <section class="lang-hero">
      <div class="container">
        <NuxtLink to="/#apps" class="back-link">← Все языки</NuxtLink>
      </div>
      <div class="container hero-grid">
        <div>
          <h1>
            <FlagIcon :id="lang!.id" class="flag" />
            {{ lang!.name }}
            <span class="native">{{ lang!.nativeName }}</span>
          </h1>
          <p class="tagline">{{ lang!.tagline }}</p>
          <p class="about">{{ lang!.about }}</p>

          <p class="intro">
            <b>{{ lang!.mascot.name }}:</b> {{ lang!.mascot.intro }}
          </p>

          <ul class="chips">
            <li>📊 Уровни {{ lang!.levels }}</li>
            <li>👥 {{ lang!.learners }} учеников</li>
            <li>📱 Готово: {{ readyApps.map((a) => platformMeta[a.platform].label).join(', ') }}</li>
          </ul>

          <a href="#platforms" class="btn btn-primary">🚀 Выбрать приложение</a>
        </div>

        <div class="visual">
          <div class="circle" />
          <LanguageMascot :id="lang!.id" class="owl" />
          <span class="bubble">{{ lang!.greeting }}</span>
          <span class="name-tag">{{ lang!.mascot.name }}</span>
        </div>
      </div>
    </section>

    <!-- Платформы -->
    <section id="platforms" class="section platforms">
      <div class="container">
        <span class="tag tag-center">📱 Платформы</span>
        <h2 class="section-title">Где учить {{ lang!.nameGenitive }}</h2>
        <p class="section-subtitle">Выбирай удобный формат — прогресс общий для всех устройств.</p>

        <div class="apps">
          <AppCard v-for="app in lang!.apps" :key="app.platform" :app="app" show-features />
        </div>
      </div>
    </section>

    <!-- Зачем учить -->
    <section class="section reasons-section">
      <div class="container">
        <span class="tag tag-center">💡 Зачем</span>
        <h2 class="section-title">Зачем учить {{ lang!.nameGenitive }}?</h2>
        <div class="reasons">
          <article v-for="r in lang!.reasons" :key="r.title" class="reason">
            <div class="reason-icon">{{ r.icon }}</div>
            <h3>{{ r.title }}</h3>
            <p>{{ r.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Программа -->
    <section class="section">
      <div class="container">
        <span class="tag tag-center">🧩 Программа</span>
        <h2 class="section-title">Что ты изучишь</h2>
        <ul class="topics">
          <li v-for="(t, i) in lang!.topics" :key="t" :style="{ '--d': i * 0.08 + 's' }">{{ t }}</li>
        </ul>
      </div>
    </section>

    <!-- Фразы -->
    <section class="section phrases-section">
      <div class="container">
        <span class="tag tag-center">🗣️ Попробуй</span>
        <h2 class="section-title">Первые фразы уже сейчас</h2>
        <p class="section-subtitle">Нажми на карточку, чтобы увидеть перевод.</p>

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
              <span class="face back">{{ p.translation }}</span>
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Другие языки -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Другие языки</h2>
        <p class="section-subtitle">Учи сразу несколько — сова Скилли не против 🦉</p>
        <div class="others">
          <NuxtLink
            v-for="o in others"
            :key="o.id"
            :to="`/languages/${o.id}`"
            class="other"
            :style="{ '--accent': o.color, '--accent-soft': o.colorSoft }"
          >
            <LanguageMascot :id="o.id" class="other-mascot" />
            <span>
              <b>{{ o.name }}</b>
              <small><FlagIcon :id="o.id" /> {{ o.nativeName }} · {{ o.mascot.name }}</small>
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
  background: linear-gradient(160deg, var(--accent-soft) 0%, #fff8ee 100%);
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
  right: -10%;
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
  color: var(--white);
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

.topics {
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

.topics li {
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 10px 22px;
  background: var(--accent-soft);
  border: var(--border);
  border-radius: 999px;
  box-shadow: 0 4px 0 var(--ink);
  animation: pop-in 0.4s ease both;
  animation-delay: var(--d);
}

.topics li:nth-child(even) {
  transform: rotate(1.5deg);
}

.phrases-section {
  background: linear-gradient(180deg, #e0f2fe 0%, var(--accent-soft) 100%);
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
  color: var(--white);
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
