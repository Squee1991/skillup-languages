export type Platform = 'android' | 'ios' | 'web'
export type Locale = 'ru' | 'uk' | 'en'

// текст на всех языках сайта
export type L10n<T = string> = Record<Locale, T>

export interface AppLink {
  platform: Platform
  title: string
  description: L10n
  url: string
  features?: L10n<string[]>
  badge?: L10n
  comingSoon?: boolean
}

export interface Reason {
  icon: string
  title: L10n
  text: L10n
}

export interface Phrase {
  word: string
  translation: L10n
}

export interface Language {
  id: string
  mascot: { name: L10n; intro: L10n }
  name: L10n
  // «выбрать немецкий», «где учить немецкий»
  nameAcc: L10n
  // «изучения немецкого»
  nameGen: L10n
  nativeName: string
  greeting: string
  color: string
  learners: number
  tagline: L10n
  about: L10n
  reasons: Reason[]
  // текст программы: *так* выделяются ключевые темы
  program: L10n<string[]>
  phrases: Phrase[]
  apps: AppLink[]
}

export const platforms: Platform[] = ['android', 'ios', 'web']

// мягкий оттенок цвета языка — сам подстраивается под светлую и тёмную тему
export const soft = (color: string, percent = 22) =>
  `color-mix(in srgb, ${color} calc(${percent}% * var(--soft-k)), var(--white))`

export const languages: Language[] = [
  {
    id: 'german',
    mascot: {
      name: { ru: 'Ёж Ганс', uk: 'Їжак Ганс', en: 'Hans the Hedgehog' },
      intro: {
        ru: 'Привет! Я Ганс. Объясню артикли так, что ты их полюбишь — и поделюсь брецелем 🥨',
        uk: 'Привіт! Я Ганс. Поясню артиклі так, що ти їх полюбиш — і поділюся брецелем 🥨',
        en: 'Hi! I’m Hans. I’ll explain articles so well you’ll love them — and share my pretzel 🥨'
      }
    },
    name: { ru: 'Немецкий', uk: 'Німецька', en: 'German' },
    nameAcc: { ru: 'немецкий', uk: 'німецьку', en: 'German' },
    nameGen: { ru: 'немецкого', uk: 'німецької', en: 'German' },
    nativeName: 'Deutsch',
    greeting: 'Hallo!',
    color: '#f59e0b',
    learners: 12000,
    tagline: {
      ru: 'Артикли, падежи и длинные слова — больше не страшно!',
      uk: 'Артиклі, відмінки та довгі слова — більше не страшно!',
      en: 'Articles, cases and long words — no longer scary!'
    },
    about: {
      ru: 'Немецкий — язык учёбы, работы и путешествий по Германии, Австрии и Швейцарии. В SkillUp German мы разложили грамматику на маленькие понятные шаги, а слова закрепляем через игры, чтобы ты заговорил уверенно уже через пару месяцев.',
      uk: 'Німецька — мова навчання, роботи та подорожей Німеччиною, Австрією та Швейцарією. У SkillUp German ми розклали граматику на маленькі зрозумілі кроки, а слова закріплюємо через ігри, щоб ти впевнено заговорив уже за кілька місяців.',
      en: 'German is the language of study, work and travel across Germany, Austria and Switzerland. In SkillUp German we broke grammar down into small, clear steps and reinforce words through games, so you can speak confidently within a couple of months.'
    },
    reasons: [
      {
        icon: '🎓',
        title: { ru: 'Учёба в Германии', uk: 'Навчання в Німеччині', en: 'Study in Germany' },
        text: {
          ru: 'Бесплатные университеты и подготовка к экзаменам Goethe и TestDaF.',
          uk: 'Безкоштовні університети та підготовка до іспитів Goethe і TestDaF.',
          en: 'Tuition-free universities and prep for the Goethe and TestDaF exams.'
        }
      },
      {
        icon: '💼',
        title: { ru: 'Карьера', uk: 'Кар’єра', en: 'Career' },
        text: {
          ru: 'Крупнейшая экономика Европы и тысячи вакансий для специалистов.',
          uk: 'Найбільша економіка Європи та тисячі вакансій для фахівців.',
          en: 'Europe’s largest economy and thousands of jobs for specialists.'
        }
      },
      {
        icon: '🏰',
        title: { ru: 'Путешествия', uk: 'Подорожі', en: 'Travel' },
        text: {
          ru: 'Германия, Австрия, Швейцария — говори с местными на их языке.',
          uk: 'Німеччина, Австрія, Швейцарія — говори з місцевими їхньою мовою.',
          en: 'Germany, Austria, Switzerland — talk to locals in their own language.'
        }
      }
    ],
    program: {
      ru: [
        'Ты разберёшься с *артиклями der / die / das* и *падежами* — без зубрёжки, на понятных примерах. Научишься строить предложения по немецким правилам, понимать речь на слух и уверенно отвечать в *живом разговоре*.',
        'Пополнишь словарь *тысячами слов с озвучкой*, подготовишься к *экзамену Goethe* и освоишь немецкий для *работы, учёбы и путешествий* — и это далеко не всё ✨'
      ],
      uk: [
        'Ти розберешся з *артиклями der / die / das* та *відмінками* — без зубріння, на зрозумілих прикладах. Навчишся будувати речення за німецькими правилами, розуміти мову на слух і впевнено відповідати в *живій розмові*.',
        'Поповниш словник *тисячами слів з озвученням*, підготуєшся до *іспиту Goethe* та опануєш німецьку для *роботи, навчання й подорожей* — і це далеко не все ✨'
      ],
      en: [
        'You’ll master *der / die / das articles* and *cases* — no cramming, just clear examples. You’ll learn to build sentences the German way, understand spoken German and answer confidently in *real conversations*.',
        'You’ll grow your vocabulary with *thousands of voiced words*, prepare for the *Goethe exam* and learn German for *work, study and travel* — and that’s not all ✨'
      ]
    },
    phrases: [
      { word: 'Guten Morgen!', translation: { ru: 'Доброе утро!', uk: 'Доброго ранку!', en: 'Good morning!' } },
      { word: 'Wie geht’s?', translation: { ru: 'Как дела?', uk: 'Як справи?', en: 'How are you?' } },
      { word: 'Ich lerne Deutsch', translation: { ru: 'Я учу немецкий', uk: 'Я вчу німецьку', en: 'I’m learning German' } },
      { word: 'Danke schön!', translation: { ru: 'Большое спасибо!', uk: 'Щиро дякую!', en: 'Thank you very much!' } }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp German',
        description: {
          ru: 'Карточки, артикли der/die/das и ежедневные мини-уроки по 5 минут.',
          uk: 'Картки, артиклі der/die/das і щоденні міні-уроки по 5 хвилин.',
          en: 'Flashcards, der/die/das articles and daily 5-minute mini lessons.'
        },
        url: 'https://play.google.com/store/apps/details?id=com.skillupgerman.app',
        features: {
          ru: ['Мини-уроки по 5 минут', 'Тренажёр артиклей', 'Работает офлайн'],
          uk: ['Міні-уроки по 5 хвилин', 'Тренажер артиклів', 'Працює офлайн'],
          en: ['5-minute mini lessons', 'Article trainer', 'Works offline']
        },
        badge: { ru: 'Хит', uk: 'Хіт', en: 'Hit' }
      },
      {
        platform: 'ios',
        title: 'SkillUp German',
        description: {
          ru: 'Та же программа на iPhone и iPad + виджет «слово дня».',
          uk: 'Та сама програма на iPhone та iPad + віджет «слово дня».',
          en: 'The same course on iPhone and iPad + a “word of the day” widget.'
        },
        url: 'https://apps.apple.com/app/skillupgerman/id6762300276',
        features: {
          ru: ['Виджет «слово дня»', 'Синхронизация с Android', 'Тёмная тема'],
          uk: ['Віджет «слово дня»', 'Синхронізація з Android', 'Темна тема'],
          en: ['“Word of the day” widget', 'Sync with Android', 'Dark theme']
        }
      },
      {
        platform: 'web',
        title: 'skillupgerman.com',
        description: {
          ru: 'Тренажёр грамматики и подготовка к Goethe A1–B1 прямо в браузере.',
          uk: 'Тренажер граматики та підготовка до Goethe A1–B1 просто в браузері.',
          en: 'Grammar trainer and Goethe A1–B1 prep right in your browser.'
        },
        url: 'https://skillupgerman.com',
        features: {
          ru: ['Пробные тесты Goethe', 'Упражнения на падежи', 'Без установки'],
          uk: ['Пробні тести Goethe', 'Вправи на відмінки', 'Без встановлення'],
          en: ['Goethe practice tests', 'Case exercises', 'No install needed']
        }
      }
    ]
  },
  {
    id: 'spanish',
    mascot: {
      name: { ru: 'Змейка Пепе', uk: 'Змійка Пепе', en: 'Pepe the Snake' },
      intro: {
        ru: '¡Hola, amigo! Я Пепе. Научу болтать по-испански быстрее, чем я ползаю 🌮',
        uk: '¡Hola, amigo! Я Пепе. Навчу балакати іспанською швидше, ніж я повзаю 🌮',
        en: '¡Hola, amigo! I’m Pepe. I’ll get you chatting in Spanish faster than I can slither 🌮'
      }
    },
    name: { ru: 'Испанский', uk: 'Іспанська', en: 'Spanish' },
    nameAcc: { ru: 'испанский', uk: 'іспанську', en: 'Spanish' },
    nameGen: { ru: 'испанского', uk: 'іспанської', en: 'Spanish' },
    nativeName: 'Español',
    greeting: '¡Hola!',
    color: '#ef4444',
    learners: 9500,
    tagline: {
      ru: 'Солнечный язык, на котором говорят 500 миллионов человек',
      uk: 'Сонячна мова, якою розмовляють 500 мільйонів людей',
      en: 'A sunny language spoken by 500 million people'
    },
    about: {
      ru: 'Испанский — один из самых простых и самых популярных языков мира. С SkillUp Español ты быстро начнёшь понимать песни и сериалы, сможешь болтать в отпуске и заводить друзей от Мадрида до Буэнос-Айреса.',
      uk: 'Іспанська — одна з найпростіших і найпопулярніших мов світу. Зі SkillUp Español ти швидко почнеш розуміти пісні й серіали, зможеш спілкуватися у відпустці та заводити друзів від Мадрида до Буенос-Айреса.',
      en: 'Spanish is one of the easiest and most popular languages in the world. With SkillUp Español you’ll quickly start understanding songs and TV shows, chat on vacation and make friends from Madrid to Buenos Aires.'
    },
    reasons: [
      {
        icon: '🌎',
        title: { ru: '20+ стран', uk: '20+ країн', en: '20+ countries' },
        text: {
          ru: 'Испания и почти вся Латинская Америка говорят по-испански.',
          uk: 'Іспанія та майже вся Латинська Америка говорять іспанською.',
          en: 'Spain and almost all of Latin America speak Spanish.'
        }
      },
      {
        icon: '🎶',
        title: { ru: 'Музыка и кино', uk: 'Музика і кіно', en: 'Music and movies' },
        text: {
          ru: 'Понимай любимые песни и сериалы без субтитров.',
          uk: 'Розумій улюблені пісні та серіали без субтитрів.',
          en: 'Understand your favorite songs and shows without subtitles.'
        }
      },
      {
        icon: '🏖️',
        title: { ru: 'Отпуск мечты', uk: 'Відпустка мрії', en: 'Dream vacation' },
        text: {
          ru: 'Заказывай тапас и спрашивай дорогу как местный.',
          uk: 'Замовляй тапас і питай дорогу як місцевий.',
          en: 'Order tapas and ask for directions like a local.'
        }
      }
    ],
    program: {
      ru: [
        'Ты освоишь *спряжение глаголов* и наконец поймёшь разницу между *ser и estar*. Научишься говорить с правильным *произношением* и рассказывать о прошлом во всех *временах*.',
        'Выучишь живые *фразы для путешествий*, начнёшь понимать *песни и сериалы* и будешь болтать с носителями без стеснения — и ещё много всего интересного ✨'
      ],
      uk: [
        'Ти опануєш *дієвідмінювання* і нарешті зрозумієш різницю між *ser і estar*. Навчишся говорити з правильною *вимовою* та розповідати про минуле в усіх *часах*.',
        'Вивчиш живі *фрази для подорожей*, почнеш розуміти *пісні й серіали* та спілкуватимешся з носіями без сорому — і ще багато всього цікавого ✨'
      ],
      en: [
        'You’ll master *verb conjugation* and finally get the difference between *ser and estar*. You’ll learn to speak with proper *pronunciation* and talk about the past in all the *tenses*.',
        'You’ll pick up real *travel phrases*, start understanding *songs and TV shows* and chat with native speakers without hesitation — and lots more ✨'
      ]
    },
    phrases: [
      { word: '¡Buenos días!', translation: { ru: 'Добрый день!', uk: 'Доброго дня!', en: 'Good morning!' } },
      { word: '¿Qué tal?', translation: { ru: 'Как дела?', uk: 'Як справи?', en: 'How’s it going?' } },
      { word: 'Me encanta', translation: { ru: 'Мне очень нравится', uk: 'Мені дуже подобається', en: 'I love it' } },
      { word: '¡Muchas gracias!', translation: { ru: 'Большое спасибо!', uk: 'Щиро дякую!', en: 'Thank you very much!' } }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Español',
        description: {
          ru: 'Разговорные фразы, произношение с озвучкой и игры на скорость.',
          uk: 'Розмовні фрази, вимова з озвученням та ігри на швидкість.',
          en: 'Conversational phrases, voiced pronunciation and speed games.'
        },
        url: '#',
        features: {
          ru: ['Озвучка носителями', 'Игры на скорость', 'Работает офлайн'],
          uk: ['Озвучення носіями', 'Ігри на швидкість', 'Працює офлайн'],
          en: ['Native speaker audio', 'Speed games', 'Works offline']
        }
      },
      {
        platform: 'ios',
        title: 'SkillUp Español',
        description: {
          ru: 'Уроки офлайн, напоминания и прогресс, синхронизированный с Android.',
          uk: 'Уроки офлайн, нагадування та прогрес, синхронізований з Android.',
          en: 'Offline lessons, reminders and progress synced with Android.'
        },
        url: '#',
        features: {
          ru: ['Умные напоминания', 'Синхронизация с Android', 'Уроки офлайн'],
          uk: ['Розумні нагадування', 'Синхронізація з Android', 'Уроки офлайн'],
          en: ['Smart reminders', 'Sync with Android', 'Offline lessons']
        },
        badge: { ru: 'Новое', uk: 'Нове', en: 'New' }
      },
      {
        platform: 'web',
        title: 'Español Online',
        description: {
          ru: 'Спряжения глаголов и интерактивные диалоги для путешествий.',
          uk: 'Дієвідмінювання та інтерактивні діалоги для подорожей.',
          en: 'Verb conjugations and interactive travel dialogues.'
        },
        url: '#',
        features: {
          ru: ['Тренажёр спряжений', 'Диалоги для поездок'],
          uk: ['Тренажер дієвідмінювання', 'Діалоги для поїздок'],
          en: ['Conjugation trainer', 'Travel dialogues']
        },
        comingSoon: true
      }
    ]
  },
  {
    id: 'polish',
    mascot: {
      name: { ru: 'Бобёр Бартек', uk: 'Бобер Бартек', en: 'Bartek the Beaver' },
      intro: {
        ru: 'Cześć! Я Бартек. Строю плотины из слов и угощаю пирогами — пора учить польский 🥟',
        uk: 'Cześć! Я Бартек. Будую греблі зі слів і пригощаю пирогами — час вчити польську 🥟',
        en: 'Cześć! I’m Bartek. I build dams out of words and treat you to pierogi — time to learn Polish 🥟'
      }
    },
    name: { ru: 'Польский', uk: 'Польська', en: 'Polish' },
    nameAcc: { ru: 'польский', uk: 'польську', en: 'Polish' },
    nameGen: { ru: 'польского', uk: 'польської', en: 'Polish' },
    nativeName: 'Polski',
    greeting: 'Cześć!',
    color: '#ec4899',
    learners: 6800,
    tagline: {
      ru: 'Близкий и понятный язык для жизни, работы и учёбы в Польше',
      uk: 'Близька й зрозуміла мова для життя, роботи та навчання в Польщі',
      en: 'A friendly language for living, working and studying in Poland'
    },
    about: {
      ru: 'Польский похож на русский, но полон сюрпризов: шипящие звуки, семь падежей и «ложные друзья». SkillUp Polski помогает быстро освоиться — от бытовых фраз до подготовки к Karta Polaka и собеседованиям.',
      uk: 'Польська схожа на українську, але повна сюрпризів: шиплячі звуки, сім відмінків і «хибні друзі». SkillUp Polski допомагає швидко освоїтися — від побутових фраз до підготовки до Karta Polaka та співбесід.',
      en: 'Polish is full of surprises: hissing sounds, seven cases and “false friends”. SkillUp Polski helps you settle in fast — from everyday phrases to preparing for the Karta Polaka and job interviews.'
    },
    reasons: [
      {
        icon: '🏙️',
        title: { ru: 'Жизнь в Польше', uk: 'Життя в Польщі', en: 'Life in Poland' },
        text: {
          ru: 'Аренда, врачи, документы — справишься со всем сам.',
          uk: 'Оренда, лікарі, документи — впораєшся з усім сам.',
          en: 'Renting, doctors, paperwork — handle it all on your own.'
        }
      },
      {
        icon: '🪪',
        title: { ru: 'Karta Polaka', uk: 'Karta Polaka', en: 'Karta Polaka' },
        text: {
          ru: 'Готовим к собеседованию: история, культура и традиции.',
          uk: 'Готуємо до співбесіди: історія, культура та традиції.',
          en: 'We’ll prep you for the interview: history, culture and traditions.'
        }
      },
      {
        icon: '🎓',
        title: { ru: 'Учёба', uk: 'Навчання', en: 'Study' },
        text: {
          ru: 'Польские вузы и сертификат B1/B2 для поступления.',
          uk: 'Польські виші та сертифікат B1/B2 для вступу.',
          en: 'Polish universities and the B1/B2 certificate for admission.'
        }
      }
    ],
    program: {
      ru: [
        'Ты научишься правильно произносить *ś, ć, ż и sz*, разберёшься с *семью падежами* и перестанешь путаться в *«ложных друзьях»* — словах, которые похожи на русские, но значат совсем другое.',
        'Освоишь польский для *работы и быта*, подготовишься к *Karta Polaka* и будешь уверенно общаться в любой ситуации — и это только начало ✨'
      ],
      uk: [
        'Ти навчишся правильно вимовляти *ś, ć, ż і sz*, розберешся із *сімома відмінками* й перестанеш плутатися в *«хибних друзях»* — словах, що схожі на українські, але означають зовсім інше.',
        'Опануєш польську для *роботи й побуту*, підготуєшся до *Karta Polaka* та впевнено спілкуватимешся в будь-якій ситуації — і це лише початок ✨'
      ],
      en: [
        'You’ll learn to pronounce *ś, ć, ż and sz* correctly, get the hang of the *seven cases* and stop tripping over *“false friends”* — words that look familiar but mean something else entirely.',
        'You’ll master Polish for *work and everyday life*, prepare for the *Karta Polaka* and communicate confidently in any situation — and that’s just the beginning ✨'
      ]
    },
    phrases: [
      { word: 'Dzień dobry!', translation: { ru: 'Добрый день!', uk: 'Добрий день!', en: 'Good day!' } },
      { word: 'Co słychać?', translation: { ru: 'Как дела?', uk: 'Як справи?', en: 'What’s up?' } },
      { word: 'Uczę się polskiego', translation: { ru: 'Я учу польский', uk: 'Я вчу польську', en: 'I’m learning Polish' } },
      { word: 'Dziękuję bardzo!', translation: { ru: 'Большое спасибо!', uk: 'Щиро дякую!', en: 'Thank you very much!' } }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Polski',
        description: {
          ru: 'Падежи без боли, словарь для жизни и работы в Польше.',
          uk: 'Відмінки без болю, словник для життя та роботи в Польщі.',
          en: 'Painless cases and vocabulary for living and working in Poland.'
        },
        url: '#',
        features: {
          ru: ['Тренажёр падежей', 'Словарь для работы', 'Работает офлайн'],
          uk: ['Тренажер відмінків', 'Словник для роботи', 'Працює офлайн'],
          en: ['Case trainer', 'Work vocabulary', 'Works offline']
        }
      },
      {
        platform: 'ios',
        title: 'SkillUp Polski',
        description: {
          ru: 'Ежедневные челленджи и подготовка к Karta Polaka.',
          uk: 'Щоденні челенджі та підготовка до Karta Polaka.',
          en: 'Daily challenges and Karta Polaka prep.'
        },
        url: '#',
        features: {
          ru: ['Ежедневные челленджи', 'Курс Karta Polaka'],
          uk: ['Щоденні челенджі', 'Курс Karta Polaka'],
          en: ['Daily challenges', 'Karta Polaka course']
        },
        comingSoon: true
      },
      {
        platform: 'web',
        title: 'Polski Online',
        description: {
          ru: 'Тесты на уровень, упражнения на ś, ć, ż и живые диалоги.',
          uk: 'Тести на рівень, вправи на ś, ć, ż і живі діалоги.',
          en: 'Level tests, ś/ć/ż exercises and real-life dialogues.'
        },
        url: '#',
        features: {
          ru: ['Тест на уровень', 'Тренажёр произношения', 'Без установки'],
          uk: ['Тест на рівень', 'Тренажер вимови', 'Без встановлення'],
          en: ['Level test', 'Pronunciation trainer', 'No install needed']
        }
      }
    ]
  }
]

export const findLanguage = (id: string) => languages.find((l) => l.id === id)
