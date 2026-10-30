export type Platform = 'android' | 'ios' | 'web'

export interface AppLink {
  platform: Platform
  title: string
  description: string
  url: string
  features?: string[]
  badge?: string
  comingSoon?: boolean
}

export interface Reason {
  icon: string
  title: string
  text: string
}

export interface Phrase {
  word: string
  translation: string
}

export interface Language {
  id: string
  mascot: { name: string; intro: string }
  name: string
  nameGenitive: string
  nativeName: string
  flag: string
  greeting: string
  color: string
  colorSoft: string
  learners: string
  levels: string
  tagline: string
  about: string
  reasons: Reason[]
  topics: string[]
  phrases: Phrase[]
  apps: AppLink[]
}

export const platformMeta: Record<Platform, { label: string; store: string; icon: string }> = {
  android: { label: 'Android', store: 'Google Play', icon: '🤖' },
  ios: { label: 'iOS', store: 'App Store', icon: '🍏' },
  web: { label: 'Сайт', store: 'Открыть в браузере', icon: '🌐' }
}

export const languages: Language[] = [
  {
    id: 'german',
    mascot: { name: 'Ёж Ганс', intro: 'Привет! Я Ганс. Объясню артикли так, что ты их полюбишь — и поделюсь брецелем 🥨' },
    name: 'Немецкий',
    nameGenitive: 'немецкого',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    greeting: 'Hallo!',
    color: '#f59e0b',
    colorSoft: '#fef3c7',
    learners: '12 000+',
    levels: 'A1–B2',
    tagline: 'Артикли, падежи и длинные слова — больше не страшно!',
    about:
      'Немецкий — язык учёбы, работы и путешествий по Германии, Австрии и Швейцарии. В SkillUp Deutsch мы разложили грамматику на маленькие понятные шаги, а слова закрепляем через игры, чтобы ты заговорил уверенно уже через пару месяцев.',
    reasons: [
      { icon: '🎓', title: 'Учёба в Германии', text: 'Бесплатные университеты и подготовка к экзаменам Goethe и TestDaF.' },
      { icon: '💼', title: 'Карьера', text: 'Крупнейшая экономика Европы и тысячи вакансий для специалистов.' },
      { icon: '🏰', title: 'Путешествия', text: 'Германия, Австрия, Швейцария — говори с местными на их языке.' }
    ],
    topics: ['Артикли der / die / das', 'Падежи без зубрёжки', 'Порядок слов', 'Разговорные фразы', 'Подготовка к Goethe', 'Немецкий для работы'],
    phrases: [
      { word: 'Guten Morgen!', translation: 'Доброе утро!' },
      { word: 'Wie geht’s?', translation: 'Как дела?' },
      { word: 'Ich lerne Deutsch', translation: 'Я учу немецкий' },
      { word: 'Danke schön!', translation: 'Большое спасибо!' }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Deutsch',
        description: 'Карточки, артикли der/die/das и ежедневные мини-уроки по 5 минут.',
        url: '#',
        features: ['Мини-уроки по 5 минут', 'Тренажёр артиклей', 'Работает офлайн'],
        badge: 'Хит'
      },
      {
        platform: 'ios',
        title: 'SkillUp Deutsch',
        description: 'Та же программа на iPhone и iPad + виджет «слово дня».',
        url: '#',
        features: ['Виджет «слово дня»', 'Синхронизация с Android', 'Тёмная тема']
      },
      {
        platform: 'web',
        title: 'Deutsch Online',
        description: 'Тренажёр грамматики и подготовка к Goethe A1–B1 прямо в браузере.',
        url: '#',
        features: ['Пробные тесты Goethe', 'Упражнения на падежи', 'Без установки']
      }
    ]
  },
  {
    id: 'spanish',
    mascot: { name: 'Змейка Пепе', intro: '¡Hola, amigo! Я Пепе. Научу болтать по-испански быстрее, чем я ползаю 🌮' },
    name: 'Испанский',
    nameGenitive: 'испанского',
    nativeName: 'Español',
    flag: '🇪🇸',
    greeting: '¡Hola!',
    color: '#ef4444',
    colorSoft: '#fee2e2',
    learners: '9 500+',
    levels: 'A1–B2',
    tagline: 'Солнечный язык, на котором говорят 500 миллионов человек',
    about:
      'Испанский — один из самых простых и самых популярных языков мира. С SkillUp Español ты быстро начнёшь понимать песни и сериалы, сможешь болтать в отпуске и заводить друзей от Мадрида до Буэнос-Айреса.',
    reasons: [
      { icon: '🌎', title: '20+ стран', text: 'Испания и почти вся Латинская Америка говорят по-испански.' },
      { icon: '🎶', title: 'Музыка и кино', text: 'Понимай любимые песни и сериалы без субтитров.' },
      { icon: '🏖️', title: 'Отпуск мечты', text: 'Заказывай тапас и спрашивай дорогу как местный.' }
    ],
    topics: ['Спряжение глаголов', 'Ser и estar', 'Фразы для путешествий', 'Произношение', 'Прошедшие времена', 'Испанский по сериалам'],
    phrases: [
      { word: '¡Buenos días!', translation: 'Добрый день!' },
      { word: '¿Qué tal?', translation: 'Как дела?' },
      { word: 'Me encanta', translation: 'Мне очень нравится' },
      { word: '¡Muchas gracias!', translation: 'Большое спасибо!' }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Español',
        description: 'Разговорные фразы, произношение с озвучкой и игры на скорость.',
        url: '#',
        features: ['Озвучка носителями', 'Игры на скорость', 'Работает офлайн']
      },
      {
        platform: 'ios',
        title: 'SkillUp Español',
        description: 'Уроки офлайн, напоминания и прогресс, синхронизированный с Android.',
        url: '#',
        features: ['Умные напоминания', 'Синхронизация с Android', 'Уроки офлайн'],
        badge: 'Новое'
      },
      {
        platform: 'web',
        title: 'Español Online',
        description: 'Спряжения глаголов и интерактивные диалоги для путешествий.',
        url: '#',
        features: ['Тренажёр спряжений', 'Диалоги для поездок'],
        comingSoon: true
      }
    ]
  },
  {
    id: 'polish',
    mascot: { name: 'Бобёр Бартек', intro: 'Cześć! Я Бартек. Строю плотины из слов и угощаю пирогами — пора учить польский 🥟' },
    name: 'Польский',
    nameGenitive: 'польского',
    nativeName: 'Polski',
    flag: '🇵🇱',
    greeting: 'Cześć!',
    color: '#ec4899',
    colorSoft: '#fce7f3',
    learners: '6 800+',
    levels: 'A1–B1',
    tagline: 'Близкий и понятный язык для жизни, работы и учёбы в Польше',
    about:
      'Польский похож на русский, но полон сюрпризов: шипящие звуки, семь падежей и «ложные друзья». SkillUp Polski помогает быстро освоиться — от бытовых фраз до подготовки к Karta Polaka и собеседованиям.',
    reasons: [
      { icon: '🏙️', title: 'Жизнь в Польше', text: 'Аренда, врачи, документы — справишься со всем сам.' },
      { icon: '🪪', title: 'Karta Polaka', text: 'Готовим к собеседованию: история, культура и традиции.' },
      { icon: '🎓', title: 'Учёба', text: 'Польские вузы и сертификат B1/B2 для поступления.' }
    ],
    topics: ['Произношение ś, ć, ż, sz', 'Семь падежей', '«Ложные друзья»', 'Польский для работы', 'Подготовка к Karta Polaka', 'Бытовые ситуации'],
    phrases: [
      { word: 'Dzień dobry!', translation: 'Добрый день!' },
      { word: 'Co słychać?', translation: 'Как дела?' },
      { word: 'Uczę się polskiego', translation: 'Я учу польский' },
      { word: 'Dziękuję bardzo!', translation: 'Большое спасибо!' }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Polski',
        description: 'Падежи без боли, словарь для жизни и работы в Польше.',
        url: '#',
        features: ['Тренажёр падежей', 'Словарь для работы', 'Работает офлайн']
      },
      {
        platform: 'ios',
        title: 'SkillUp Polski',
        description: 'Ежедневные челленджи и подготовка к Karta Polaka.',
        url: '#',
        features: ['Ежедневные челленджи', 'Курс Karta Polaka'],
        comingSoon: true
      },
      {
        platform: 'web',
        title: 'Polski Online',
        description: 'Тесты на уровень, упражнения на ś, ć, ż и живые диалоги.',
        url: '#',
        features: ['Тест на уровень', 'Тренажёр произношения', 'Без установки'],
        badge: 'Бесплатно'
      }
    ]
  }
]

export const findLanguage = (id: string) => languages.find((l) => l.id === id)
