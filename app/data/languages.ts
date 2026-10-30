// Каталог приложений. Замени `url: '#'` на реальные ссылки, когда приложения появятся в сторах.

export type Platform = 'android' | 'ios' | 'web'

export interface AppLink {
  platform: Platform
  title: string
  description: string
  url: string
  badge?: string
  comingSoon?: boolean
}

export interface Language {
  id: string
  name: string
  nativeName: string
  flag: string
  greeting: string
  color: string
  colorSoft: string
  learners: string
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
    name: 'Немецкий',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    greeting: 'Hallo!',
    color: '#f59e0b',
    colorSoft: '#fef3c7',
    learners: '12 000+',
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Deutsch',
        description: 'Карточки, артикли der/die/das и ежедневные мини-уроки по 5 минут.',
        url: '#',
        badge: 'Хит'
      },
      {
        platform: 'ios',
        title: 'SkillUp Deutsch',
        description: 'Та же программа на iPhone и iPad + виджет «слово дня».',
        url: '#'
      },
      {
        platform: 'web',
        title: 'Deutsch Online',
        description: 'Тренажёр грамматики и подготовка к Goethe A1–B1 прямо в браузере.',
        url: '#'
      }
    ]
  },
  {
    id: 'spanish',
    name: 'Испанский',
    nativeName: 'Español',
    flag: '🇪🇸',
    greeting: '¡Hola!',
    color: '#ef4444',
    colorSoft: '#fee2e2',
    learners: '9 500+',
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Español',
        description: 'Разговорные фразы, произношение с озвучкой и игры на скорость.',
        url: '#'
      },
      {
        platform: 'ios',
        title: 'SkillUp Español',
        description: 'Уроки офлайн, напоминания и прогресс, синхронизированный с Android.',
        url: '#',
        badge: 'Новое'
      },
      {
        platform: 'web',
        title: 'Español Online',
        description: 'Спряжения глаголов и интерактивные диалоги для путешествий.',
        url: '#',
        comingSoon: true
      }
    ]
  },
  {
    id: 'polish',
    name: 'Польский',
    nativeName: 'Polski',
    flag: '🇵🇱',
    greeting: 'Cześć!',
    color: '#ec4899',
    colorSoft: '#fce7f3',
    learners: '6 800+',
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Polski',
        description: 'Падежи без боли, словарь для жизни и работы в Польше.',
        url: '#'
      },
      {
        platform: 'ios',
        title: 'SkillUp Polski',
        description: 'Ежедневные челленджи и подготовка к Karta Polaka.',
        url: '#',
        comingSoon: true
      },
      {
        platform: 'web',
        title: 'Polski Online',
        description: 'Тесты на уровень, упражнения на ś, ć, ż и живые диалоги.',
        url: '#',
        badge: 'Бесплатно'
      }
    ]
  }
]
