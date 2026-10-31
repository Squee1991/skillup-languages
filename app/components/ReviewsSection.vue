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
    name: { ru: 'Анна', uk: 'Ганна', en: 'Anna', de: 'Anna', es: 'Anna', fr: 'Anna', pl: 'Anna' },
    avatar: '👩‍💼',
    lang: 'german',
    platform: 'android',
    text: {
      ru: 'Наконец-то поняла артикли! Учу немецкий в метро и за 3 месяца дошла до A2.',
      uk: 'Нарешті зрозуміла артиклі! Вчу німецьку в метро і за 3 місяці дійшла до A2.',
      en: 'Finally got the articles! I study German on the subway and reached A2 in 3 months.',
      de: 'Endlich habe ich die Artikel verstanden! Ich lerne Deutsch in der U-Bahn und war nach 3 Monaten auf A2.',
      es: '¡Por fin entendí los artículos! Estudio alemán en el metro y en 3 meses llegué al A2.',
      fr: 'J’ai enfin compris les articles ! J’apprends l’allemand dans le métro et j’ai atteint le A2 en 3 mois.',
      pl: 'Wreszcie zrozumiałam rodzajniki! Uczę się niemieckiego w metrze i w 3 miesiące doszłam do A2.'
    }
  },
  {
    name: { ru: 'Дмитрий', uk: 'Дмитро', en: 'Dmitry', de: 'Dmitri', es: 'Dmitri', fr: 'Dmitri', pl: 'Dmitrij' },
    avatar: '🧑‍💻',
    lang: 'polish',
    platform: 'web',
    text: {
      ru: 'Переехал в Варшаву — приложение реально спасло в первые недели. Падежи больше не пугают.',
      uk: 'Переїхав до Варшави — застосунок реально врятував у перші тижні. Відмінки більше не лякають.',
      en: 'Moved to Warsaw — the app really saved me in the first weeks. Cases don’t scare me anymore.',
      de: 'Bin nach Warschau gezogen — die App hat mich in den ersten Wochen echt gerettet. Die Fälle machen mir keine Angst mehr.',
      es: 'Me mudé a Varsovia y la app me salvó en las primeras semanas. Los casos ya no me asustan.',
      fr: 'J’ai déménagé à Varsovie — l’appli m’a vraiment sauvé les premières semaines. Les cas ne me font plus peur.',
      pl: 'Przeprowadziłem się do Warszawy — aplikacja naprawdę uratowała mnie w pierwszych tygodniach. Przypadki już mnie nie straszą.'
    }
  },
  {
    name: { ru: 'Мария', uk: 'Марія', en: 'Maria', de: 'Maria', es: 'María', fr: 'Maria', pl: 'Maria' },
    avatar: '👩‍🎨',
    lang: 'spanish',
    platform: 'ios',
    text: {
      ru: 'Глоби не даёт пропускать дни 😅 Уже 120 дней подряд, говорю с испанцами в отпуске!',
      uk: 'Глобі не дає пропускати дні 😅 Вже 120 днів поспіль, говорю з іспанцями у відпустці!',
      en: 'Globi won’t let me skip a day 😅 120 days in a row — I chat with Spaniards on vacation!',
      de: 'Globi lässt mich keinen Tag auslassen 😅 120 Tage am Stück — im Urlaub plaudere ich mit Spaniern!',
      es: 'Globi no me deja saltarme ni un día 😅 120 días seguidos — ¡en vacaciones hablo con españoles!',
      fr: 'Globi ne me laisse sauter aucun jour 😅 120 jours d’affilée — en vacances, je discute avec des Espagnols !',
      pl: 'Globi nie pozwala mi opuścić ani dnia 😅 120 dni z rzędu — na wakacjach rozmawiam z Hiszpanami!'
    }
  },
  {
    name: { ru: 'Олег', uk: 'Олег', en: 'Oleg', de: 'Oleg', es: 'Oleg', fr: 'Oleg', pl: 'Oleg' },
    avatar: '👨‍🔧',
    lang: 'german',
    platform: 'ios',
    text: {
      ru: 'Готовился к собеседованию в немецкую компанию. Фразы для работы — то, что нужно, оффер мой!',
      uk: 'Готувався до співбесіди в німецьку компанію. Фрази для роботи — те, що треба, офер мій!',
      en: 'Prepared for an interview at a German company. The work phrases were spot on — I got the offer!',
      de: 'Habe mich auf ein Vorstellungsgespräch bei einer deutschen Firma vorbereitet. Die Business-Phrasen waren genau richtig — ich habe das Angebot bekommen!',
      es: 'Me preparé para una entrevista en una empresa alemana. Las frases de trabajo fueron justo lo que necesitaba — ¡conseguí la oferta!',
      fr: 'Je me suis préparé à un entretien dans une entreprise allemande. Les phrases pro étaient pile ce qu’il fallait — j’ai décroché l’offre !',
      pl: 'Przygotowywałem się do rozmowy w niemieckiej firmie. Zwroty do pracy były strzałem w dziesiątkę — dostałem ofertę!'
    }
  },
  {
    name: { ru: 'Катя', uk: 'Катя', en: 'Katya', de: 'Katja', es: 'Katia', fr: 'Katia', pl: 'Katia' },
    avatar: '👩‍🎓',
    lang: 'spanish',
    platform: 'android',
    text: {
      ru: 'Смотрю сериалы на испанском и понимаю половину без субтитров. Год назад не знала ни слова!',
      uk: 'Дивлюся серіали іспанською і розумію половину без субтитрів. Рік тому не знала жодного слова!',
      en: 'I watch shows in Spanish and understand half without subtitles. A year ago I didn’t know a word!',
      de: 'Ich schaue Serien auf Spanisch und verstehe die Hälfte ohne Untertitel. Vor einem Jahr konnte ich kein Wort!',
      es: 'Veo series en español y entiendo la mitad sin subtítulos. ¡Hace un año no sabía ni una palabra!',
      fr: 'Je regarde des séries en espagnol et j’en comprends la moitié sans sous-titres. Il y a un an, je ne connaissais pas un mot !',
      pl: 'Oglądam seriale po hiszpańsku i rozumiem połowę bez napisów. Rok temu nie znałam ani słowa!'
    }
  },
  {
    name: { ru: 'Игорь', uk: 'Ігор', en: 'Igor', de: 'Igor', es: 'Ígor', fr: 'Igor', pl: 'Igor' },
    avatar: '🧔',
    lang: 'polish',
    platform: 'android',
    text: {
      ru: 'Уроки по 5 минут — идеально для меня. Занимаюсь в обед, и польский наконец-то сдвинулся с места.',
      uk: 'Уроки по 5 хвилин — ідеально для мене. Займаюся в обід, і польська нарешті зрушила з місця.',
      en: '5-minute lessons are perfect for me. I practice at lunch, and my Polish is finally moving forward.',
      de: '5-Minuten-Lektionen sind perfekt für mich. Ich übe in der Mittagspause, und mein Polnisch kommt endlich voran.',
      es: 'Las lecciones de 5 minutos son perfectas para mí. Practico a la hora de comer y mi polaco por fin avanza.',
      fr: 'Les leçons de 5 minutes sont parfaites pour moi. Je m’entraîne à la pause déjeuner, et mon polonais avance enfin.',
      pl: '5-minutowe lekcje są dla mnie idealne. Ćwiczę w przerwie na lunch i mój polski wreszcie ruszył z miejsca.'
    }
  },
  {
    name: { ru: 'Светлана', uk: 'Світлана', en: 'Svetlana', de: 'Swetlana', es: 'Svetlana', fr: 'Svetlana', pl: 'Swietłana' },
    avatar: '👩‍🏫',
    lang: 'german',
    platform: 'web',
    text: {
      ru: 'Занимаюсь с ноутбука на работе, а дома продолжаю с телефона. Прогресс общий — очень удобно.',
      uk: 'Займаюся з ноутбука на роботі, а вдома продовжую з телефона. Прогрес спільний — дуже зручно.',
      en: 'I study on my laptop at work and continue on my phone at home. Shared progress — so convenient.',
      de: 'Ich lerne am Laptop bei der Arbeit und mache zu Hause am Handy weiter. Gemeinsamer Fortschritt — super praktisch.',
      es: 'Estudio en el portátil en el trabajo y sigo en el móvil en casa. Progreso compartido — muy cómodo.',
      fr: 'J’étudie sur mon ordi au travail et je continue sur mon téléphone à la maison. Progression partagée — super pratique.',
      pl: 'Uczę się na laptopie w pracy, a w domu kontynuuję na telefonie. Wspólne postępy — bardzo wygodne.'
    }
  },
  {
    name: { ru: 'Артём', uk: 'Артем', en: 'Artem', de: 'Artjom', es: 'Artiom', fr: 'Artiom', pl: 'Artiom' },
    avatar: '👨‍🎤',
    lang: 'spanish',
    platform: 'ios',
    text: {
      ru: 'Произношение с озвучкой — топ. Испанцы в Барселоне сказали, что у меня хороший акцент 🔥',
      uk: 'Вимова з озвученням — топ. Іспанці в Барселоні сказали, що в мене гарний акцент 🔥',
      en: 'The voiced pronunciation is top-notch. People in Barcelona said my accent is great 🔥',
      de: 'Die vertonte Aussprache ist top. In Barcelona meinten die Leute, mein Akzent sei super 🔥',
      es: 'La pronunciación con audio es lo más. En Barcelona me dijeron que tengo muy buen acento 🔥',
      fr: 'La prononciation audio est au top. À Barcelone, on m’a dit que j’avais un super accent 🔥',
      pl: 'Wymowa z nagraniami to sztos. W Barcelonie powiedzieli mi, że mam świetny akcent 🔥'
    }
  },
  {
    name: { ru: 'Лиза', uk: 'Ліза', en: 'Liza', de: 'Lisa', es: 'Liza', fr: 'Liza', pl: 'Liza' },
    avatar: '👩‍🚀',
    lang: 'polish',
    platform: 'ios',
    text: {
      ru: 'Готовилась к Karta Polaka и сдала с первого раза. Спасибо за вопросы по истории и традициям!',
      uk: 'Готувалася до Karta Polaka і склала з першого разу. Дякую за питання з історії та традицій!',
      en: 'Prepared for the Karta Polaka and passed on the first try. Thanks for the history and traditions questions!',
      de: 'Habe mich auf die Karta Polaka vorbereitet und beim ersten Versuch bestanden. Danke für die Fragen zu Geschichte und Traditionen!',
      es: 'Me preparé para la Karta Polaka y aprobé a la primera. ¡Gracias por las preguntas de historia y tradiciones!',
      fr: 'Je me suis préparée à la Karta Polaka et je l’ai obtenue du premier coup. Merci pour les questions d’histoire et de traditions !',
      pl: 'Przygotowałam się do Karty Polaka i zdałam za pierwszym razem. Dzięki za pytania z historii i tradycji!'
    }
  }
]

const n = reviews.length
const current = ref(0)
const dragX = ref(0)
const dragging = ref(false)
let startX = 0
let timer: ReturnType<typeof setTimeout> | undefined
let wheelLocked = false
// мышь над колодой — автолистание на паузе
const hovered = ref(false)

// куда улетела каждая карточка: -1 — влево, 1 — вправо
const flyDirs = ref<number[]>(reviews.map(() => -1))

const isFirst = computed(() => current.value === 0)
const isLast = computed(() => current.value === n - 1)

// вперёд: верхняя карточка улетает, стопка под ней становится тоньше
const next = (dir = -1) => {
  if (isLast.value) return
  flyDirs.value[current.value] = dir
  current.value++
}
// назад: последняя улетевшая карточка возвращается на стопку
const prev = () => {
  if (!isFirst.value) current.value--
}
const goTo = (i: number) => (current.value = i)

// любое ручное действие откладывает автолистание заново
const manual = (action: () => void) => {
  action()
  startAuto()
}

// прокрутка вбок тачпадом/колесом над колодой — по одной карточке за жест
const onWheel = (e: WheelEvent) => {
  if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 15) return
  e.preventDefault()
  if (wheelLocked) return
  wheelLocked = true
  setTimeout(() => (wheelLocked = false), 700)
  manual(() => (e.deltaX > 0 ? next() : prev()))
}

// положение карточки: < 0 — уже улетела, 0 — сверху, 1…n — лежит в стопке
const cardStyle = (i: number) => {
  const offset = i - current.value

  if (offset < 0) {
    const dir = flyDirs.value[i] ?? -1
    return {
      transform: `translate(${70 * dir}%, -30px) rotate(${20 * dir}deg) scale(0.9)`,
      zIndex: 20 + i,
      opacity: 0,
      pointerEvents: 'none' as const
    }
  }

  if (offset === 0) {
    return {
      transform: `translateX(${dragX.value}px) rotate(${dragX.value / 18}deg)`,
      zIndex: 10,
      transition: dragging.value ? 'none' : undefined
    }
  }

  // каждая следующая карточка чуть ниже, меньше и повёрнута то в одну, то в другую сторону
  const tilt = (offset % 2 ? 1 : -1) * Math.min(1 + offset * 0.4, 3)
  return {
    transform: `translateY(${offset * 9}px) rotate(${tilt}deg) scale(${1 - offset * 0.025})`,
    zIndex: 10 - offset,
    pointerEvents: 'none' as const
  }
}

// автолистание: дошли до конца — пауза, и карточки по одной слетаются обратно в колоду
const startAuto = () => {
  stopAuto()
  if (hovered.value || dragging.value) return
  timer = setTimeout(() => {
    if (isLast.value) gatherBack()
    else {
      next()
      startAuto()
    }
  }, isLast.value ? 3000 : 5000)
}
const stopAuto = () => {
  if (timer) clearTimeout(timer)
  timer = undefined
}

const gatherBack = () => {
  if (isFirst.value) return startAuto()
  prev()
  timer = setTimeout(gatherBack, 160)
}

// свайп: тащим верхнюю карточку влево — листаем вперёд, вправо — назад
const onDown = (e: PointerEvent) => {
  if (e.pointerType === 'mouse' && e.button !== 0) return
  dragging.value = true
  startX = e.clientX
  stopAuto()
  ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
}
const onMove = (e: PointerEvent) => {
  if (!dragging.value) return
  const dx = e.clientX - startX
  // дальше листать некуда — карточка лишь слегка поддаётся
  const blocked = (dx < 0 && isLast.value) || (dx > 0 && isFirst.value)
  dragX.value = blocked ? dx / 4 : dx
}
const onUp = () => {
  if (!dragging.value) return
  dragging.value = false
  const dx = dragX.value
  dragX.value = 0
  // влево — карточка улетает, вправо — возвращается предыдущая
  manual(() => {
    if (dx < -60) next(-1)
    else if (dx > 60) prev()
  })
}

// пауза при наведении — только для мыши: на тач-экранах mouseenter эмулируется,
// а mouseleave не приходит, и автолистание зависало навсегда
const onEnter = (e: PointerEvent) => {
  if (e.pointerType !== 'mouse') return
  hovered.value = true
  stopAuto()
}
const onLeave = (e: PointerEvent) => {
  if (e.pointerType !== 'mouse') return
  hovered.value = false
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

      <div class="slider" @pointerenter="onEnter" @pointerleave="onLeave">
        <button class="arrow arrow-prev" :disabled="isFirst" :aria-label="t('reviews.prev')" @click="manual(prev)">←</button>

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

        <button class="arrow arrow-next" :disabled="isLast" :aria-label="t('reviews.next')" @click="manual(next)">→</button>
      </div>

      <p class="counter">{{ current + 1 }} / {{ n }}</p>

      <div class="dots">
        <button
          v-for="(r, i) in reviews"
          :key="i"
          class="dot"
          :class="{ active: i === current }"
          :aria-label="t('reviews.goTo', { n: i + 1 })"
          @click="manual(() => goTo(i))"
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
  /* место под стопку: каждая карточка в ней ниже предыдущей на 9px */
  padding-bottom: 84px;
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

.arrow:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.06);
  background: var(--yellow);
  color: var(--ink);
}

.arrow:disabled {
  opacity: 0.35;
  cursor: default;
}

.counter {
  margin: 0 0 10px;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  color: var(--ink-soft);
}

.arrow:active:not(:disabled) {
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
