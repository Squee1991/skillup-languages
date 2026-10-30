<script setup lang="ts">
import { findLanguage, soft, type L10n, type Platform } from '~/data/languages'

interface Review {
  name: L10n
  avatar: string
  lang: string
  platform: Platform
  text: L10n
}

const { t } = useI18n()
const { l } = useL10n()

// фон карточки — мягкий оттенок цвета языка
const colorOf = (lang: string) => soft(findLanguage(lang)?.color ?? '#7c3aed', 26)

// ВНИМАНИЕ: отзывы-заглушки — перед запуском замени на настоящие
const reviews: Review[] = [
  {
    name: { ru: 'Анна', uk: 'Ганна', en: 'Anna' },
    avatar: '👩‍💼',
    lang: 'german',
    platform: 'android',
    text: {
      ru: 'Наконец-то поняла артикли! Учу немецкий в метро и за 3 месяца дошла до A2.',
      uk: 'Нарешті зрозуміла артиклі! Вчу німецьку в метро і за 3 місяці дійшла до A2.',
      en: 'Finally got the articles! I study German on the subway and reached A2 in 3 months.'
    }
  },
  {
    name: { ru: 'Дмитрий', uk: 'Дмитро', en: 'Dmitry' },
    avatar: '🧑‍💻',
    lang: 'polish',
    platform: 'web',
    text: {
      ru: 'Переехал в Варшаву — приложение реально спасло в первые недели. Падежи больше не пугают.',
      uk: 'Переїхав до Варшави — застосунок реально врятував у перші тижні. Відмінки більше не лякають.',
      en: 'Moved to Warsaw — the app really saved me in the first weeks. Cases don’t scare me anymore.'
    }
  },
  {
    name: { ru: 'Мария', uk: 'Марія', en: 'Maria' },
    avatar: '👩‍🎨',
    lang: 'spanish',
    platform: 'ios',
    text: {
      ru: 'Глоби не даёт пропускать дни 😅 Уже 120 дней подряд, говорю с испанцами в отпуске!',
      uk: 'Глобі не дає пропускати дні 😅 Вже 120 днів поспіль, говорю з іспанцями у відпустці!',
      en: 'Globi won’t let me skip a day 😅 120 days in a row — I chat with Spaniards on vacation!'
    }
  },
  {
    name: { ru: 'Олег', uk: 'Олег', en: 'Oleg' },
    avatar: '👨‍🔧',
    lang: 'german',
    platform: 'ios',
    text: {
      ru: 'Готовился к собеседованию в немецкую компанию. Фразы для работы — то, что нужно, оффер мой!',
      uk: 'Готувався до співбесіди в німецьку компанію. Фрази для роботи — те, що треба, офер мій!',
      en: 'Prepared for an interview at a German company. The work phrases were spot on — I got the offer!'
    }
  },
  {
    name: { ru: 'Катя', uk: 'Катя', en: 'Katya' },
    avatar: '👩‍🎓',
    lang: 'spanish',
    platform: 'android',
    text: {
      ru: 'Смотрю сериалы на испанском и понимаю половину без субтитров. Год назад не знала ни слова!',
      uk: 'Дивлюся серіали іспанською і розумію половину без субтитрів. Рік тому не знала жодного слова!',
      en: 'I watch shows in Spanish and understand half without subtitles. A year ago I didn’t know a word!'
    }
  },
  {
    name: { ru: 'Игорь', uk: 'Ігор', en: 'Igor' },
    avatar: '🧔',
    lang: 'polish',
    platform: 'android',
    text: {
      ru: 'Уроки по 5 минут — идеально для меня. Занимаюсь в обед, и польский наконец-то сдвинулся с места.',
      uk: 'Уроки по 5 хвилин — ідеально для мене. Займаюся в обід, і польська нарешті зрушила з місця.',
      en: '5-minute lessons are perfect for me. I practice at lunch, and my Polish is finally moving forward.'
    }
  },
  {
    name: { ru: 'Светлана', uk: 'Світлана', en: 'Svetlana' },
    avatar: '👩‍🏫',
    lang: 'german',
    platform: 'web',
    text: {
      ru: 'Занимаюсь с ноутбука на работе, а дома продолжаю с телефона. Прогресс общий — очень удобно.',
      uk: 'Займаюся з ноутбука на роботі, а вдома продовжую з телефона. Прогрес спільний — дуже зручно.',
      en: 'I study on my laptop at work and continue on my phone at home. Shared progress — so convenient.'
    }
  },
  {
    name: { ru: 'Артём', uk: 'Артем', en: 'Artem' },
    avatar: '👨‍🎤',
    lang: 'spanish',
    platform: 'ios',
    text: {
      ru: 'Произношение с озвучкой — топ. Испанцы в Барселоне сказали, что у меня хороший акцент 🔥',
      uk: 'Вимова з озвученням — топ. Іспанці в Барселоні сказали, що в мене гарний акцент 🔥',
      en: 'The voiced pronunciation is top-notch. People in Barcelona said my accent is great 🔥'
    }
  },
  {
    name: { ru: 'Лиза', uk: 'Ліза', en: 'Liza' },
    avatar: '👩‍🚀',
    lang: 'polish',
    platform: 'ios',
    text: {
      ru: 'Готовилась к Karta Polaka и сдала с первого раза. Спасибо за вопросы по истории и традициям!',
      uk: 'Готувалася до Karta Polaka і склала з першого разу. Дякую за питання з історії та традицій!',
      en: 'Prepared for the Karta Polaka and passed on the first try. Thanks for the history and traditions questions!'
    }
  }
]

const n = reviews.length
const current = ref(0)
const dragX = ref(0)
const dragging = ref(false)
let startX = 0
let timer: ReturnType<typeof setInterval> | undefined

// куда улетает верхняя карточка: -1 — влево, 1 — вправо
const flyDir = ref(-1)
let wheelLocked = false

const next = (dir = -1) => {
  flyDir.value = dir
  current.value = (current.value + 1) % n
}
const prev = () => {
  flyDir.value = -1
  current.value = (current.value - 1 + n) % n
}
const goTo = (i: number) => (current.value = i)

// прокрутка вбок тачпадом/колесом над колодой — листаем, по одной карточке за жест
const onWheel = (e: WheelEvent) => {
  if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 15) return
  e.preventDefault()
  if (wheelLocked) return
  wheelLocked = true
  setTimeout(() => (wheelLocked = false), 700)
  if (e.deltaX > 0) next()
  else prev()
  startAuto()
}

// положение карточки в колоде: 0 — сверху, n-1 — только что улетела
const cardStyle = (i: number) => {
  const offset = (i - current.value + n) % n

  if (offset === 0) {
    return {
      transform: `translateX(${dragX.value}px) rotate(${dragX.value / 18}deg)`,
      zIndex: 10,
      transition: dragging.value ? 'none' : undefined
    }
  }
  if (offset === 1) return { transform: 'translateY(18px) rotate(3deg) scale(0.95)', zIndex: 9, pointerEvents: 'none' as const }
  if (offset === 2) return { transform: 'translateY(36px) rotate(-3deg) scale(0.9)', zIndex: 8, pointerEvents: 'none' as const }
  if (offset === n - 1) {
    return {
      transform: `translate(${70 * flyDir.value}%, -30px) rotate(${20 * flyDir.value}deg) scale(0.9)`,
      zIndex: 11,
      opacity: 0,
      pointerEvents: 'none' as const
    }
  }
  return { transform: 'translateY(48px) scale(0.85)', zIndex: 1, opacity: 0, pointerEvents: 'none' as const }
}

const startAuto = () => {
  stopAuto()
  timer = setInterval(() => next(), 5000)
}
const stopAuto = () => timer && clearInterval(timer)

// свайп: тащим верхнюю карточку и бросаем в любую сторону — она улетает туда, а мы листаем вперёд
const onDown = (e: PointerEvent) => {
  if (e.pointerType === 'mouse' && e.button !== 0) return
  dragging.value = true
  startX = e.clientX
  stopAuto()
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}
const onMove = (e: PointerEvent) => {
  if (dragging.value) dragX.value = e.clientX - startX
}
const onUp = () => {
  if (!dragging.value) return
  dragging.value = false
  if (Math.abs(dragX.value) > 60) next(Math.sign(dragX.value))
  dragX.value = 0
  startAuto()
}

onMounted(startAuto)
onBeforeUnmount(stopAuto)
</script>

<template>
  <section id="reviews" class="section reviews-section">
    <div class="container">
      <span class="tag tag-center">{{ t('reviews.tag') }}</span>
      <h2 class="section-title">{{ t('reviews.title') }}</h2>
      <p class="section-subtitle">{{ t('reviews.subtitle') }}</p>

      <div class="slider" @mouseenter="stopAuto" @mouseleave="startAuto">
        <button class="arrow arrow-prev" :aria-label="t('reviews.prev')" @click="prev">←</button>

        <div
          class="deck"
          @pointerdown="onDown"
          @pointermove="onMove"
          @pointerup="onUp"
          @pointercancel="onUp"
          @wheel="onWheel"
        >
          <figure
            v-for="(r, i) in reviews"
            :key="i"
            class="review"
            :class="{ front: i === current }"
            :style="{ background: colorOf(r.lang), ...cardStyle(i) }"
            :aria-hidden="i !== current"
          >
            <span class="quote-mark">“</span>
            <div class="stars">★★★★★</div>
            <blockquote>{{ l(r.text) }}</blockquote>
            <figcaption>
              <span class="avatar">{{ r.avatar }}</span>
              <b>{{ l(r.name) }}</b>
              <span class="meta">
                <PlatformIcon :platform="r.platform" />
                <FlagIcon :id="r.lang" />
              </span>
            </figcaption>
          </figure>
        </div>

        <button class="arrow arrow-next" :aria-label="t('reviews.next')" @click="next()">→</button>
      </div>

      <div class="dots">
        <button
          v-for="(r, i) in reviews"
          :key="i"
          class="dot"
          :class="{ active: i === current }"
          :aria-label="t('reviews.goTo', { n: i + 1 })"
          @click="goTo(i)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  overflow: hidden;
  overflow: clip;
}

.tag-center {
  display: table;
  margin: 0 auto 16px;
  background: #fbcfe8;
}

.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

/* все карточки лежат в одной ячейке сетки — получается колода */
.deck {
  position: relative;
  display: grid;
  width: 100%;
  max-width: 560px;
  padding-bottom: 40px;
  touch-action: pan-y;
  cursor: grab;
  user-select: none;
}

.deck:active {
  cursor: grabbing;
}

.review {
  grid-area: 1 / 1;
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 36px;
  border: var(--border);
  border-radius: 32px;
  box-shadow: 0 10px 24px rgba(30, 27, 75, 0.18);
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.6s ease;
  will-change: transform;
}

.quote-mark {
  position: absolute;
  top: -8px;
  right: 28px;
  font-family: 'Baloo 2', sans-serif;
  font-size: 7rem;
  line-height: 1;
  color: var(--text);
  opacity: 0.12;
  pointer-events: none;
}

.stars {
  color: var(--orange);
  font-size: 1.5rem;
  letter-spacing: 3px;
}

blockquote {
  margin: 0;
  flex: 1;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.35;
}

figcaption {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
}

.avatar {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  font-size: 1.7rem;
  background: var(--white);
  border: var(--border);
  border-radius: 50%;
}

.meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  font-size: 1.4rem;
}

.arrow {
  flex-shrink: 0;
  position: relative;
  z-index: 20;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text);
  background: var(--white);
  border: var(--border);
  border-radius: 50%;
  box-shadow: 0 5px 0 var(--ink);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.arrow:hover {
  transform: translateY(-3px) scale(1.06);
  background: var(--yellow);
}

.arrow:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0 var(--ink);
}

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
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

@media (max-width: 720px) {
  .slider {
    gap: 0;
  }

  /* на телефоне листаем свайпом и точками */
  .arrow {
    display: none;
  }

  .review {
    padding: 26px 22px;
  }

  blockquote {
    font-size: 1.2rem;
  }

  .quote-mark {
    font-size: 5rem;
  }
}
</style>
