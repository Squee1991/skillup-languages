export type Platform = 'android' | 'ios' | 'web'
export type Locale = 'ru' | 'uk' | 'en' | 'de' | 'es' | 'fr' | 'pl'

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
      name: { ru: 'Ёж Ганс', uk: 'Їжак Ганс', en: 'Hans the Hedgehog', de: 'Igel Hans', es: 'Hans el Erizo', fr: 'Hans le hérisson', pl: 'Jeż Hans' },
      intro: {
        ru: 'Привет! Я Ганс. Объясню артикли так, что ты их полюбишь — и поделюсь брецелем 🥨',
        uk: 'Привіт! Я Ганс. Поясню артиклі так, що ти їх полюбиш — і поділюся брецелем 🥨',
        en: 'Hi! I’m Hans. I’ll explain articles so well you’ll love them — and share my pretzel 🥨',
        de: 'Hallo! Ich bin Hans. Ich erkläre dir die Artikel so, dass du sie lieben wirst — und teile meine Brezel 🥨',
        es: '¡Hola! Soy Hans. Te explicaré los artículos tan bien que te encantarán — y compartiré mi pretzel 🥨',
        fr: 'Salut ! Moi, c’est Hans. Je t’explique les articles si bien que tu vas les adorer — et je partage mon bretzel 🥨',
        pl: 'Cześć! Jestem Hans. Wytłumaczę ci rodzajniki tak, że je pokochasz — i podzielę się preclem 🥨'
      }
    },
    name: { ru: 'Немецкий', uk: 'Німецька', en: 'German', de: 'Deutsch', es: 'Alemán', fr: 'Allemand', pl: 'Niemiecki' },
    nameAcc: { ru: 'немецкий', uk: 'німецьку', en: 'German', de: 'Deutsch', es: 'alemán', fr: 'l’allemand', pl: 'niemiecki' },
    nameGen: { ru: 'немецкого', uk: 'німецької', en: 'German', de: 'Deutsch', es: 'alemán', fr: 'l’allemand', pl: 'niemieckiego' },
    nativeName: 'Deutsch',
    greeting: 'Hallo!',
    color: '#f59e0b',
    learners: 12000,
    tagline: {
      ru: 'Артикли, падежи и длинные слова — больше не страшно!',
      uk: 'Артиклі, відмінки та довгі слова — більше не страшно!',
      en: 'Articles, cases and long words — no longer scary!',
      de: 'Artikel, Fälle und lange Wörter — kein Grund mehr zur Angst!',
      es: 'Artículos, casos y palabras larguísimas — ¡ya no dan miedo!',
      fr: 'Articles, déclinaisons et mots interminables — plus de quoi avoir peur !',
      pl: 'Rodzajniki, przypadki i długie słowa — już się ich nie boisz!'
    },
    about: {
      ru: 'Немецкий — язык учёбы, работы и путешествий по Германии, Австрии и Швейцарии. В SkillUp German мы разложили грамматику на маленькие понятные шаги, а слова закрепляем через игры, чтобы ты заговорил уверенно уже через пару месяцев.',
      uk: 'Німецька — мова навчання, роботи та подорожей Німеччиною, Австрією та Швейцарією. У SkillUp German ми розклали граматику на маленькі зрозумілі кроки, а слова закріплюємо через ігри, щоб ти впевнено заговорив уже за кілька місяців.',
      en: 'German is the language of study, work and travel across Germany, Austria and Switzerland. In SkillUp German we broke grammar down into small, clear steps and reinforce words through games, so you can speak confidently within a couple of months.',
      de: 'Deutsch ist die Sprache für Studium, Arbeit und Reisen in Deutschland, Österreich und der Schweiz. In SkillUp German haben wir die Grammatik in kleine, klare Schritte zerlegt und festigen Wörter mit Spielen — so sprichst du schon nach wenigen Monaten sicher.',
      es: 'El alemán es el idioma para estudiar, trabajar y viajar por Alemania, Austria y Suiza. En SkillUp German dividimos la gramática en pasos pequeños y claros y reforzamos el vocabulario con juegos, para que hables con confianza en un par de meses.',
      fr: 'L’allemand est la langue des études, du travail et des voyages en Allemagne, en Autriche et en Suisse. Dans SkillUp German, nous avons découpé la grammaire en petites étapes claires et ancrons le vocabulaire grâce à des jeux, pour que tu parles avec assurance en quelques mois.',
      pl: 'Niemiecki to język nauki, pracy i podróży po Niemczech, Austrii i Szwajcarii. W SkillUp German rozłożyliśmy gramatykę na małe, zrozumiałe kroki, a słówka utrwalamy w grach — dzięki temu już po kilku miesiącach zaczniesz pewnie mówić.'
    },
    reasons: [
      {
        icon: '🎓',
        title: { ru: 'Учёба в Германии', uk: 'Навчання в Німеччині', en: 'Study in Germany', de: 'Studium in Deutschland', es: 'Estudiar en Alemania', fr: 'Étudier en Allemagne', pl: 'Studia w Niemczech' },
        text: {
          ru: 'Бесплатные университеты и подготовка к экзаменам Goethe и TestDaF.',
          uk: 'Безкоштовні університети та підготовка до іспитів Goethe і TestDaF.',
          en: 'Tuition-free universities and prep for the Goethe and TestDaF exams.',
          de: 'Gebührenfreie Unis und Vorbereitung auf die Goethe- und TestDaF-Prüfungen.',
          es: 'Universidades sin matrícula y preparación para los exámenes Goethe y TestDaF.',
          fr: 'Des universités gratuites et la préparation aux examens Goethe et TestDaF.',
          pl: 'Bezpłatne uczelnie i przygotowanie do egzaminów Goethe i TestDaF.'
        }
      },
      {
        icon: '💼',
        title: { ru: 'Карьера', uk: 'Кар’єра', en: 'Career', de: 'Karriere', es: 'Carrera', fr: 'Carrière', pl: 'Kariera' },
        text: {
          ru: 'Крупнейшая экономика Европы и тысячи вакансий для специалистов.',
          uk: 'Найбільша економіка Європи та тисячі вакансій для фахівців.',
          en: 'Europe’s largest economy and thousands of jobs for specialists.',
          de: 'Die größte Volkswirtschaft Europas und tausende Jobs für Fachkräfte.',
          es: 'La mayor economía de Europa y miles de empleos para profesionales.',
          fr: 'La première économie d’Europe et des milliers d’offres pour les spécialistes.',
          pl: 'Największa gospodarka Europy i tysiące ofert pracy dla specjalistów.'
        }
      },
      {
        icon: '🏰',
        title: { ru: 'Путешествия', uk: 'Подорожі', en: 'Travel', de: 'Reisen', es: 'Viajes', fr: 'Voyages', pl: 'Podróże' },
        text: {
          ru: 'Германия, Австрия, Швейцария — говори с местными на их языке.',
          uk: 'Німеччина, Австрія, Швейцарія — говори з місцевими їхньою мовою.',
          en: 'Germany, Austria, Switzerland — talk to locals in their own language.',
          de: 'Deutschland, Österreich, Schweiz — sprich mit Einheimischen in ihrer Sprache.',
          es: 'Alemania, Austria, Suiza — habla con la gente local en su idioma.',
          fr: 'Allemagne, Autriche, Suisse — parle aux habitants dans leur langue.',
          pl: 'Niemcy, Austria, Szwajcaria — rozmawiaj z miejscowymi w ich języku.'
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
      ],
      de: [
        'Du meisterst *die Artikel der / die / das* und *die Fälle* — ohne Pauken, mit klaren Beispielen. Du lernst, Sätze nach deutschen Regeln zu bauen, gesprochenes Deutsch zu verstehen und im *echten Gespräch* sicher zu antworten.',
        'Du erweiterst deinen Wortschatz um *tausende vertonte Wörter*, bereitest dich auf die *Goethe-Prüfung* vor und lernst Deutsch für *Arbeit, Studium und Reisen* — und das ist noch längst nicht alles ✨'
      ],
      es: [
        'Dominarás *los artículos der / die / das* y *los casos* — sin memorizar, con ejemplos claros. Aprenderás a construir frases al estilo alemán, entender el alemán hablado y responder con seguridad en *conversaciones reales*.',
        'Ampliarás tu vocabulario con *miles de palabras con audio*, te prepararás para el *examen Goethe* y aprenderás alemán para *trabajar, estudiar y viajar* — y eso no es todo ✨'
      ],
      fr: [
        'Tu maîtriseras *les articles der / die / das* et *les cas* — sans bachotage, avec des exemples clairs. Tu apprendras à construire des phrases à l’allemande, à comprendre l’allemand parlé et à répondre avec assurance dans *de vraies conversations*.',
        'Tu enrichiras ton vocabulaire de *milliers de mots audio*, tu te prépareras à *l’examen Goethe* et tu apprendras l’allemand pour *le travail, les études et les voyages* — et ce n’est pas tout ✨'
      ],
      pl: [
        'Opanujesz *rodzajniki der / die / das* i *przypadki* — bez wkuwania, na jasnych przykładach. Nauczysz się budować zdania według niemieckich zasad, rozumieć mowę ze słuchu i pewnie odpowiadać w *prawdziwej rozmowie*.',
        'Poszerzysz słownictwo o *tysiące słów z nagraniami*, przygotujesz się do *egzaminu Goethe* i opanujesz niemiecki do *pracy, nauki i podróży* — a to dopiero początek ✨'
      ]
    },
    phrases: [
      { word: 'Guten Morgen!', translation: { ru: 'Доброе утро!', uk: 'Доброго ранку!', en: 'Good morning!', de: 'Guten Morgen!', es: '¡Buenos días!', fr: 'Bonjour !', pl: 'Dzień dobry!' } },
      { word: 'Wie geht’s?', translation: { ru: 'Как дела?', uk: 'Як справи?', en: 'How are you?', de: 'Wie geht es dir?', es: '¿Cómo estás?', fr: 'Comment ça va ?', pl: 'Jak się masz?' } },
      { word: 'Ich lerne Deutsch', translation: { ru: 'Я учу немецкий', uk: 'Я вчу німецьку', en: 'I’m learning German', de: 'Ich lerne Deutsch', es: 'Estoy aprendiendo alemán', fr: 'J’apprends l’allemand', pl: 'Uczę się niemieckiego' } },
      { word: 'Danke schön!', translation: { ru: 'Большое спасибо!', uk: 'Щиро дякую!', en: 'Thank you very much!', de: 'Vielen Dank!', es: '¡Muchas gracias!', fr: 'Merci beaucoup !', pl: 'Dziękuję bardzo!' } }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp German',
        description: {
          ru: 'Карточки, артикли der/die/das и ежедневные мини-уроки по 5 минут.',
          uk: 'Картки, артиклі der/die/das і щоденні міні-уроки по 5 хвилин.',
          en: 'Flashcards, der/die/das articles and daily 5-minute mini lessons.',
          de: 'Karteikarten, Artikel der/die/das und tägliche 5-Minuten-Lektionen.',
          es: 'Tarjetas, artículos der/die/das y minilecciones diarias de 5 minutos.',
          fr: 'Cartes mémoire, articles der/die/das et mini-leçons quotidiennes de 5 minutes.',
          pl: 'Fiszki, rodzajniki der/die/das i codzienne 5-minutowe minilekcje.'
        },
        url: 'https://play.google.com/store/apps/details?id=com.skillupgerman.app',
        features: {
          ru: ['Мини-уроки по 5 минут', 'Тренажёр артиклей', 'Работает офлайн'],
          uk: ['Міні-уроки по 5 хвилин', 'Тренажер артиклів', 'Працює офлайн'],
          en: ['5-minute mini lessons', 'Article trainer', 'Works offline'],
          de: ['5-Minuten-Lektionen', 'Artikel-Trainer', 'Funktioniert offline'],
          es: ['Minilecciones de 5 minutos', 'Entrenador de artículos', 'Funciona sin conexión'],
          fr: ['Mini-leçons de 5 minutes', 'Entraîneur d’articles', 'Fonctionne hors ligne'],
          pl: ['5-minutowe minilekcje', 'Trener rodzajników', 'Działa offline']
        },
        badge: { ru: 'Хит', uk: 'Хіт', en: 'Hit', de: 'Hit', es: 'Top', fr: 'Top', pl: 'Hit' }
      },
      {
        platform: 'ios',
        title: 'SkillUp German',
        description: {
          ru: 'Та же программа на iPhone и iPad + виджет «слово дня».',
          uk: 'Та сама програма на iPhone та iPad + віджет «слово дня».',
          en: 'The same course on iPhone and iPad + a “word of the day” widget.',
          de: 'Derselbe Kurs auf iPhone und iPad + ein „Wort des Tages“-Widget.',
          es: 'El mismo curso en iPhone y iPad + un widget de «palabra del día».',
          fr: 'Le même cours sur iPhone et iPad + un widget « mot du jour ».',
          pl: 'Ten sam kurs na iPhonie i iPadzie + widżet „słowo dnia”.'
        },
        url: 'https://apps.apple.com/app/skillupgerman/id6762300276',
        features: {
          ru: ['Виджет «слово дня»', 'Синхронизация с Android', 'Тёмная тема'],
          uk: ['Віджет «слово дня»', 'Синхронізація з Android', 'Темна тема'],
          en: ['“Word of the day” widget', 'Sync with Android', 'Dark theme'],
          de: ['„Wort des Tages“-Widget', 'Sync mit Android', 'Dunkles Design'],
          es: ['Widget «palabra del día»', 'Sincronización con Android', 'Tema oscuro'],
          fr: ['Widget « mot du jour »', 'Synchro avec Android', 'Thème sombre'],
          pl: ['Widżet „słowo dnia”', 'Synchronizacja z Androidem', 'Ciemny motyw']
        }
      },
      {
        platform: 'web',
        title: 'skillupgerman.com',
        description: {
          ru: 'Тренажёр грамматики и подготовка к Goethe A1–B1 прямо в браузере.',
          uk: 'Тренажер граматики та підготовка до Goethe A1–B1 просто в браузері.',
          en: 'Grammar trainer and Goethe A1–B1 prep right in your browser.',
          de: 'Grammatiktrainer und Vorbereitung auf Goethe A1–B1 direkt im Browser.',
          es: 'Entrenador de gramática y preparación para Goethe A1–B1 en tu navegador.',
          fr: 'Entraîneur de grammaire et préparation au Goethe A1–B1 dans ton navigateur.',
          pl: 'Trener gramatyki i przygotowanie do Goethe A1–B1 prosto w przeglądarce.'
        },
        url: 'https://skillupgerman.com',
        features: {
          ru: ['Пробные тесты Goethe', 'Упражнения на падежи', 'Без установки'],
          uk: ['Пробні тести Goethe', 'Вправи на відмінки', 'Без встановлення'],
          en: ['Goethe practice tests', 'Case exercises', 'No install needed'],
          de: ['Goethe-Übungstests', 'Übungen zu den Fällen', 'Ohne Installation'],
          es: ['Exámenes de práctica Goethe', 'Ejercicios de casos', 'Sin instalación'],
          fr: ['Tests blancs Goethe', 'Exercices sur les cas', 'Sans installation'],
          pl: ['Próbne testy Goethe', 'Ćwiczenia z przypadków', 'Bez instalacji']
        }
      }
    ]
  },
  {
    id: 'spanish',
    mascot: {
      name: { ru: 'Змейка Пепе', uk: 'Змійка Пепе', en: 'Pepe the Snake', de: 'Schlange Pepe', es: 'Pepe la Serpiente', fr: 'Pepe le serpent', pl: 'Wąż Pepe' },
      intro: {
        ru: '¡Hola, amigo! Я Пепе. Научу болтать по-испански быстрее, чем я ползаю 🌮',
        uk: '¡Hola, amigo! Я Пепе. Навчу балакати іспанською швидше, ніж я повзаю 🌮',
        en: '¡Hola, amigo! I’m Pepe. I’ll get you chatting in Spanish faster than I can slither 🌮',
        de: '¡Hola, amigo! Ich bin Pepe. Ich bringe dich schneller zum Plaudern auf Spanisch, als ich schlängeln kann 🌮',
        es: '¡Hola, amigo! Soy Pepe. Te haré charlar en español más rápido de lo que yo repto 🌮',
        fr: '¡Hola, amigo ! Moi, c’est Pepe. Je vais te faire bavarder en espagnol plus vite que je ne rampe 🌮',
        pl: '¡Hola, amigo! Jestem Pepe. Nauczę cię gadać po hiszpańsku szybciej, niż pełzam 🌮'
      }
    },
    name: { ru: 'Испанский', uk: 'Іспанська', en: 'Spanish', de: 'Spanisch', es: 'Español', fr: 'Espagnol', pl: 'Hiszpański' },
    nameAcc: { ru: 'испанский', uk: 'іспанську', en: 'Spanish', de: 'Spanisch', es: 'español', fr: 'l’espagnol', pl: 'hiszpański' },
    nameGen: { ru: 'испанского', uk: 'іспанської', en: 'Spanish', de: 'Spanisch', es: 'español', fr: 'l’espagnol', pl: 'hiszpańskiego' },
    nativeName: 'Español',
    greeting: '¡Hola!',
    color: '#ef4444',
    learners: 9500,
    tagline: {
      ru: 'Солнечный язык, на котором говорят 500 миллионов человек',
      uk: 'Сонячна мова, якою розмовляють 500 мільйонів людей',
      en: 'A sunny language spoken by 500 million people',
      de: 'Eine sonnige Sprache, die 500 Millionen Menschen sprechen',
      es: 'Un idioma soleado que hablan 500 millones de personas',
      fr: 'Une langue ensoleillée parlée par 500 millions de personnes',
      pl: 'Słoneczny język, którym mówi 500 milionów ludzi'
    },
    about: {
      ru: 'Испанский — один из самых простых и самых популярных языков мира. С SkillUp Español ты быстро начнёшь понимать песни и сериалы, сможешь болтать в отпуске и заводить друзей от Мадрида до Буэнос-Айреса.',
      uk: 'Іспанська — одна з найпростіших і найпопулярніших мов світу. Зі SkillUp Español ти швидко почнеш розуміти пісні й серіали, зможеш спілкуватися у відпустці та заводити друзів від Мадрида до Буенос-Айреса.',
      en: 'Spanish is one of the easiest and most popular languages in the world. With SkillUp Español you’ll quickly start understanding songs and TV shows, chat on vacation and make friends from Madrid to Buenos Aires.',
      de: 'Spanisch ist eine der einfachsten und beliebtesten Sprachen der Welt. Mit SkillUp Español verstehst du schnell Lieder und Serien, plauderst im Urlaub und findest Freunde von Madrid bis Buenos Aires.',
      es: 'El español es uno de los idiomas más sencillos y populares del mundo. Con SkillUp Español pronto entenderás canciones y series, charlarás en vacaciones y harás amigos de Madrid a Buenos Aires.',
      fr: 'L’espagnol est l’une des langues les plus simples et les plus populaires au monde. Avec SkillUp Español, tu comprendras vite chansons et séries, tu bavarderas en vacances et te feras des amis de Madrid à Buenos Aires.',
      pl: 'Hiszpański to jeden z najprostszych i najpopularniejszych języków świata. Ze SkillUp Español szybko zaczniesz rozumieć piosenki i seriale, rozmawiać na wakacjach i poznawać przyjaciół od Madrytu po Buenos Aires.'
    },
    reasons: [
      {
        icon: '🌎',
        title: { ru: '20+ стран', uk: '20+ країн', en: '20+ countries', de: '20+ Länder', es: 'Más de 20 países', fr: 'Plus de 20 pays', pl: 'Ponad 20 krajów' },
        text: {
          ru: 'Испания и почти вся Латинская Америка говорят по-испански.',
          uk: 'Іспанія та майже вся Латинська Америка говорять іспанською.',
          en: 'Spain and almost all of Latin America speak Spanish.',
          de: 'Spanien und fast ganz Lateinamerika sprechen Spanisch.',
          es: 'España y casi toda Latinoamérica hablan español.',
          fr: 'L’Espagne et presque toute l’Amérique latine parlent espagnol.',
          pl: 'Hiszpania i niemal cała Ameryka Łacińska mówią po hiszpańsku.'
        }
      },
      {
        icon: '🎶',
        title: { ru: 'Музыка и кино', uk: 'Музика і кіно', en: 'Music and movies', de: 'Musik und Filme', es: 'Música y cine', fr: 'Musique et cinéma', pl: 'Muzyka i kino' },
        text: {
          ru: 'Понимай любимые песни и сериалы без субтитров.',
          uk: 'Розумій улюблені пісні та серіали без субтитрів.',
          en: 'Understand your favorite songs and shows without subtitles.',
          de: 'Versteh deine Lieblingssongs und -serien ohne Untertitel.',
          es: 'Entiende tus canciones y series favoritas sin subtítulos.',
          fr: 'Comprends tes chansons et séries préférées sans sous-titres.',
          pl: 'Rozumiej ulubione piosenki i seriale bez napisów.'
        }
      },
      {
        icon: '🏖️',
        title: { ru: 'Отпуск мечты', uk: 'Відпустка мрії', en: 'Dream vacation', de: 'Traumurlaub', es: 'Vacaciones de ensueño', fr: 'Vacances de rêve', pl: 'Wymarzone wakacje' },
        text: {
          ru: 'Заказывай тапас и спрашивай дорогу как местный.',
          uk: 'Замовляй тапас і питай дорогу як місцевий.',
          en: 'Order tapas and ask for directions like a local.',
          de: 'Bestell Tapas und frag nach dem Weg wie ein Einheimischer.',
          es: 'Pide tapas y pregunta cómo llegar como un local.',
          fr: 'Commande des tapas et demande ton chemin comme un local.',
          pl: 'Zamawiaj tapas i pytaj o drogę jak miejscowy.'
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
      ],
      de: [
        'Du meisterst *die Konjugation* und verstehst endlich den Unterschied zwischen *ser und estar*. Du lernst, mit richtiger *Aussprache* zu sprechen und in allen *Zeiten* über die Vergangenheit zu erzählen.',
        'Du lernst echte *Reisephrasen*, verstehst bald *Lieder und Serien* und plauderst ohne Hemmungen mit Muttersprachlern — und noch vieles mehr ✨'
      ],
      es: [
        'Dominarás *la conjugación verbal* y por fin entenderás la diferencia entre *ser y estar*. Aprenderás a hablar con buena *pronunciación* y a contar el pasado en todos los *tiempos*.',
        'Aprenderás *frases para viajar* de verdad, empezarás a entender *canciones y series* y charlarás con nativos sin vergüenza — y mucho más ✨'
      ],
      fr: [
        'Tu maîtriseras *la conjugaison* et comprendras enfin la différence entre *ser et estar*. Tu apprendras à parler avec une bonne *prononciation* et à raconter le passé à tous les *temps*.',
        'Tu apprendras de vraies *phrases de voyage*, tu commenceras à comprendre *chansons et séries* et tu discuteras avec des natifs sans complexe — et bien plus encore ✨'
      ],
      pl: [
        'Opanujesz *odmianę czasowników* i wreszcie zrozumiesz różnicę między *ser i estar*. Nauczysz się mówić z poprawną *wymową* i opowiadać o przeszłości we wszystkich *czasach*.',
        'Poznasz prawdziwe *zwroty na podróż*, zaczniesz rozumieć *piosenki i seriale* i będziesz rozmawiać z native speakerami bez skrępowania — i wiele więcej ✨'
      ]
    },
    phrases: [
      { word: '¡Buenos días!', translation: { ru: 'Добрый день!', uk: 'Доброго дня!', en: 'Good morning!', de: 'Guten Morgen!', es: '¡Buenos días!', fr: 'Bonjour !', pl: 'Dzień dobry!' } },
      { word: '¿Qué tal?', translation: { ru: 'Как дела?', uk: 'Як справи?', en: 'How’s it going?', de: 'Wie läuft’s?', es: '¿Qué tal?', fr: 'Ça roule ?', pl: 'Co tam?' } },
      { word: 'Me encanta', translation: { ru: 'Мне очень нравится', uk: 'Мені дуже подобається', en: 'I love it', de: 'Ich liebe es', es: 'Me encanta', fr: 'J’adore', pl: 'Uwielbiam to' } },
      { word: '¡Muchas gracias!', translation: { ru: 'Большое спасибо!', uk: 'Щиро дякую!', en: 'Thank you very much!', de: 'Vielen Dank!', es: '¡Muchas gracias!', fr: 'Merci beaucoup !', pl: 'Dziękuję bardzo!' } }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Español',
        description: {
          ru: 'Разговорные фразы, произношение с озвучкой и игры на скорость.',
          uk: 'Розмовні фрази, вимова з озвученням та ігри на швидкість.',
          en: 'Conversational phrases, voiced pronunciation and speed games.',
          de: 'Alltagsphrasen, vertonte Aussprache und Schnelligkeitsspiele.',
          es: 'Frases coloquiales, pronunciación con audio y juegos de velocidad.',
          fr: 'Phrases du quotidien, prononciation audio et jeux de rapidité.',
          pl: 'Potoczne zwroty, wymowa z nagraniami i gry na szybkość.'
        },
        url: '#',
        features: {
          ru: ['Озвучка носителями', 'Игры на скорость', 'Работает офлайн'],
          uk: ['Озвучення носіями', 'Ігри на швидкість', 'Працює офлайн'],
          en: ['Native speaker audio', 'Speed games', 'Works offline'],
          de: ['Audio von Muttersprachlern', 'Schnelligkeitsspiele', 'Funktioniert offline'],
          es: ['Audio de nativos', 'Juegos de velocidad', 'Funciona sin conexión'],
          fr: ['Audio par des natifs', 'Jeux de rapidité', 'Fonctionne hors ligne'],
          pl: ['Nagrania native speakerów', 'Gry na szybkość', 'Działa offline']
        }
      },
      {
        platform: 'ios',
        title: 'SkillUp Español',
        description: {
          ru: 'Уроки офлайн, напоминания и прогресс, синхронизированный с Android.',
          uk: 'Уроки офлайн, нагадування та прогрес, синхронізований з Android.',
          en: 'Offline lessons, reminders and progress synced with Android.',
          de: 'Offline-Lektionen, Erinnerungen und mit Android synchronisierter Fortschritt.',
          es: 'Lecciones sin conexión, recordatorios y progreso sincronizado con Android.',
          fr: 'Leçons hors ligne, rappels et progression synchronisée avec Android.',
          pl: 'Lekcje offline, przypomnienia i postępy zsynchronizowane z Androidem.'
        },
        url: '#',
        features: {
          ru: ['Умные напоминания', 'Синхронизация с Android', 'Уроки офлайн'],
          uk: ['Розумні нагадування', 'Синхронізація з Android', 'Уроки офлайн'],
          en: ['Smart reminders', 'Sync with Android', 'Offline lessons'],
          de: ['Smarte Erinnerungen', 'Sync mit Android', 'Offline-Lektionen'],
          es: ['Recordatorios inteligentes', 'Sincronización con Android', 'Lecciones sin conexión'],
          fr: ['Rappels intelligents', 'Synchro avec Android', 'Leçons hors ligne'],
          pl: ['Inteligentne przypomnienia', 'Synchronizacja z Androidem', 'Lekcje offline']
        },
        badge: { ru: 'Новое', uk: 'Нове', en: 'New', de: 'Neu', es: 'Nuevo', fr: 'Nouveau', pl: 'Nowość' }
      },
      {
        platform: 'web',
        title: 'Español Online',
        description: {
          ru: 'Спряжения глаголов и интерактивные диалоги для путешествий.',
          uk: 'Дієвідмінювання та інтерактивні діалоги для подорожей.',
          en: 'Verb conjugations and interactive travel dialogues.',
          de: 'Konjugationen und interaktive Reisedialoge.',
          es: 'Conjugaciones verbales y diálogos interactivos para viajar.',
          fr: 'Conjugaisons et dialogues de voyage interactifs.',
          pl: 'Odmiana czasowników i interaktywne dialogi na podróż.'
        },
        url: '#',
        features: {
          ru: ['Тренажёр спряжений', 'Диалоги для поездок'],
          uk: ['Тренажер дієвідмінювання', 'Діалоги для поїздок'],
          en: ['Conjugation trainer', 'Travel dialogues'],
          de: ['Konjugationstrainer', 'Reisedialoge'],
          es: ['Entrenador de conjugación', 'Diálogos para viajar'],
          fr: ['Entraîneur de conjugaison', 'Dialogues de voyage'],
          pl: ['Trener odmiany', 'Dialogi na podróż']
        },
        comingSoon: true
      }
    ]
  },
  {
    id: 'polish',
    mascot: {
      name: { ru: 'Бобёр Бартек', uk: 'Бобер Бартек', en: 'Bartek the Beaver', de: 'Biber Bartek', es: 'Bartek el Castor', fr: 'Bartek le castor', pl: 'Bóbr Bartek' },
      intro: {
        ru: 'Cześć! Я Бартек. Строю плотины из слов и угощаю пирогами — пора учить польский 🥟',
        uk: 'Cześć! Я Бартек. Будую греблі зі слів і пригощаю пирогами — час вчити польську 🥟',
        en: 'Cześć! I’m Bartek. I build dams out of words and treat you to pierogi — time to learn Polish 🥟',
        de: 'Cześć! Ich bin Bartek. Ich baue Dämme aus Wörtern und verwöhne dich mit Pierogi — Zeit, Polnisch zu lernen 🥟',
        es: 'Cześć! Soy Bartek. Construyo presas con palabras y te invito a unos pierogi — ¡es hora de aprender polaco! 🥟',
        fr: 'Cześć ! Moi, c’est Bartek. Je construis des barrages avec des mots et je t’offre des pierogi — c’est l’heure d’apprendre le polonais 🥟',
        pl: 'Cześć! Jestem Bartek. Buduję tamy ze słów i częstuję pierogami — czas na polski 🥟'
      }
    },
    name: { ru: 'Польский', uk: 'Польська', en: 'Polish', de: 'Polnisch', es: 'Polaco', fr: 'Polonais', pl: 'Polski' },
    nameAcc: { ru: 'польский', uk: 'польську', en: 'Polish', de: 'Polnisch', es: 'polaco', fr: 'le polonais', pl: 'polski' },
    nameGen: { ru: 'польского', uk: 'польської', en: 'Polish', de: 'Polnisch', es: 'polaco', fr: 'le polonais', pl: 'polskiego' },
    nativeName: 'Polski',
    greeting: 'Cześć!',
    color: '#ec4899',
    learners: 6800,
    tagline: {
      ru: 'Близкий и понятный язык для жизни, работы и учёбы в Польше',
      uk: 'Близька й зрозуміла мова для життя, роботи та навчання в Польщі',
      en: 'A friendly language for living, working and studying in Poland',
      de: 'Eine zugängliche Sprache für Leben, Arbeit und Studium in Polen',
      es: 'Un idioma cercano para vivir, trabajar y estudiar en Polonia',
      fr: 'Une langue accessible pour vivre, travailler et étudier en Pologne',
      pl: 'Język do życia, pracy i nauki w Polsce'
    },
    about: {
      ru: 'Польский похож на русский, но полон сюрпризов: шипящие звуки, семь падежей и «ложные друзья». SkillUp Polski помогает быстро освоиться — от бытовых фраз до подготовки к Karta Polaka и собеседованиям.',
      uk: 'Польська схожа на українську, але повна сюрпризів: шиплячі звуки, сім відмінків і «хибні друзі». SkillUp Polski допомагає швидко освоїтися — від побутових фраз до підготовки до Karta Polaka та співбесід.',
      en: 'Polish is full of surprises: hissing sounds, seven cases and “false friends”. SkillUp Polski helps you settle in fast — from everyday phrases to preparing for the Karta Polaka and job interviews.',
      de: 'Polnisch steckt voller Überraschungen: Zischlaute, sieben Fälle und „falsche Freunde“. SkillUp Polski hilft dir, dich schnell einzuleben — von Alltagsphrasen bis zur Vorbereitung auf die Karta Polaka und Vorstellungsgespräche.',
      es: 'El polaco está lleno de sorpresas: sonidos sibilantes, siete casos y «falsos amigos». SkillUp Polski te ayuda a adaptarte rápido — desde frases cotidianas hasta preparar la Karta Polaka y entrevistas de trabajo.',
      fr: 'Le polonais regorge de surprises : sons chuintants, sept cas et « faux amis ». SkillUp Polski t’aide à t’adapter vite — des phrases du quotidien à la préparation de la Karta Polaka et des entretiens d’embauche.',
      pl: 'Polski jest pełen niespodzianek: szeleszczące głoski, siedem przypadków i „fałszywi przyjaciele”. SkillUp Polski pomaga szybko się odnaleźć — od codziennych zwrotów po przygotowanie do Karty Polaka i rozmów o pracę.'
    },
    reasons: [
      {
        icon: '🏙️',
        title: { ru: 'Жизнь в Польше', uk: 'Життя в Польщі', en: 'Life in Poland', de: 'Leben in Polen', es: 'Vivir en Polonia', fr: 'Vivre en Pologne', pl: 'Życie w Polsce' },
        text: {
          ru: 'Аренда, врачи, документы — справишься со всем сам.',
          uk: 'Оренда, лікарі, документи — впораєшся з усім сам.',
          en: 'Renting, doctors, paperwork — handle it all on your own.',
          de: 'Wohnung, Arzt, Behörden — du schaffst alles selbst.',
          es: 'Alquiler, médicos, papeleo — lo resolverás todo por tu cuenta.',
          fr: 'Logement, médecins, paperasse — tu gères tout seul.',
          pl: 'Wynajem, lekarze, urzędy — poradzisz sobie ze wszystkim sam.'
        }
      },
      {
        icon: '🪪',
        title: { ru: 'Karta Polaka', uk: 'Karta Polaka', en: 'Karta Polaka', de: 'Karta Polaka', es: 'Karta Polaka', fr: 'Karta Polaka', pl: 'Karta Polaka' },
        text: {
          ru: 'Готовим к собеседованию: история, культура и традиции.',
          uk: 'Готуємо до співбесіди: історія, культура та традиції.',
          en: 'We’ll prep you for the interview: history, culture and traditions.',
          de: 'Wir bereiten dich aufs Gespräch vor: Geschichte, Kultur und Traditionen.',
          es: 'Te preparamos para la entrevista: historia, cultura y tradiciones.',
          fr: 'On te prépare à l’entretien : histoire, culture et traditions.',
          pl: 'Przygotujemy cię do rozmowy: historia, kultura i tradycje.'
        }
      },
      {
        icon: '🎓',
        title: { ru: 'Учёба', uk: 'Навчання', en: 'Study', de: 'Studium', es: 'Estudios', fr: 'Études', pl: 'Studia' },
        text: {
          ru: 'Польские вузы и сертификат B1/B2 для поступления.',
          uk: 'Польські виші та сертифікат B1/B2 для вступу.',
          en: 'Polish universities and the B1/B2 certificate for admission.',
          de: 'Polnische Hochschulen und das B1/B2-Zertifikat für die Zulassung.',
          es: 'Universidades polacas y el certificado B1/B2 para la admisión.',
          fr: 'Les universités polonaises et le certificat B1/B2 pour l’admission.',
          pl: 'Polskie uczelnie i certyfikat B1/B2 przy rekrutacji.'
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
      ],
      de: [
        'Du lernst, *ś, ć, ż und sz* richtig auszusprechen, kommst mit den *sieben Fällen* klar und stolperst nicht mehr über *„falsche Freunde“* — Wörter, die vertraut aussehen, aber etwas ganz anderes bedeuten.',
        'Du meisterst Polnisch für *Arbeit und Alltag*, bereitest dich auf die *Karta Polaka* vor und kommunizierst in jeder Situation sicher — und das ist erst der Anfang ✨'
      ],
      es: [
        'Aprenderás a pronunciar bien *ś, ć, ż y sz*, dominarás los *siete casos* y dejarás de tropezar con los *«falsos amigos»* — palabras que parecen conocidas pero significan algo totalmente distinto.',
        'Dominarás el polaco para *el trabajo y la vida diaria*, te prepararás para la *Karta Polaka* y te comunicarás con seguridad en cualquier situación — y esto es solo el principio ✨'
      ],
      fr: [
        'Tu apprendras à bien prononcer *ś, ć, ż et sz*, tu dompteras les *sept cas* et tu ne trébucheras plus sur les *« faux amis »* — des mots qui semblent familiers mais veulent dire tout autre chose.',
        'Tu maîtriseras le polonais pour *le travail et la vie quotidienne*, tu te prépareras à la *Karta Polaka* et tu communiqueras avec assurance en toute situation — et ce n’est que le début ✨'
      ],
      pl: [
        'Nauczysz się poprawnie wymawiać *ś, ć, ż i sz*, opanujesz *siedem przypadków* i przestaniesz mylić *„fałszywych przyjaciół”* — słowa, które wyglądają znajomo, a znaczą coś zupełnie innego.',
        'Opanujesz polski do *pracy i codziennego życia*, przygotujesz się do *Karty Polaka* i będziesz pewnie porozumiewać się w każdej sytuacji — a to dopiero początek ✨'
      ]
    },
    phrases: [
      { word: 'Dzień dobry!', translation: { ru: 'Добрый день!', uk: 'Добрий день!', en: 'Good day!', de: 'Guten Tag!', es: '¡Buenos días!', fr: 'Bonjour !', pl: 'Dzień dobry!' } },
      { word: 'Co słychać?', translation: { ru: 'Как дела?', uk: 'Як справи?', en: 'What’s up?', de: 'Was gibt’s Neues?', es: '¿Qué hay de nuevo?', fr: 'Quoi de neuf ?', pl: 'Co słychać?' } },
      { word: 'Uczę się polskiego', translation: { ru: 'Я учу польский', uk: 'Я вчу польську', en: 'I’m learning Polish', de: 'Ich lerne Polnisch', es: 'Estoy aprendiendo polaco', fr: 'J’apprends le polonais', pl: 'Uczę się polskiego' } },
      { word: 'Dziękuję bardzo!', translation: { ru: 'Большое спасибо!', uk: 'Щиро дякую!', en: 'Thank you very much!', de: 'Vielen Dank!', es: '¡Muchas gracias!', fr: 'Merci beaucoup !', pl: 'Dziękuję bardzo!' } }
    ],
    apps: [
      {
        platform: 'android',
        title: 'SkillUp Polski',
        description: {
          ru: 'Падежи без боли, словарь для жизни и работы в Польше.',
          uk: 'Відмінки без болю, словник для життя та роботи в Польщі.',
          en: 'Painless cases and vocabulary for living and working in Poland.',
          de: 'Fälle ohne Schmerz und Wortschatz für Leben und Arbeit in Polen.',
          es: 'Casos sin dolor y vocabulario para vivir y trabajar en Polonia.',
          fr: 'Des cas sans douleur et du vocabulaire pour vivre et travailler en Pologne.',
          pl: 'Przypadki bez bólu i słownictwo do życia i pracy w Polsce.'
        },
        url: '#',
        features: {
          ru: ['Тренажёр падежей', 'Словарь для работы', 'Работает офлайн'],
          uk: ['Тренажер відмінків', 'Словник для роботи', 'Працює офлайн'],
          en: ['Case trainer', 'Work vocabulary', 'Works offline'],
          de: ['Fälle-Trainer', 'Wortschatz für den Job', 'Funktioniert offline'],
          es: ['Entrenador de casos', 'Vocabulario laboral', 'Funciona sin conexión'],
          fr: ['Entraîneur de cas', 'Vocabulaire professionnel', 'Fonctionne hors ligne'],
          pl: ['Trener przypadków', 'Słownictwo do pracy', 'Działa offline']
        }
      },
      {
        platform: 'ios',
        title: 'SkillUp Polski',
        description: {
          ru: 'Ежедневные челленджи и подготовка к Karta Polaka.',
          uk: 'Щоденні челенджі та підготовка до Karta Polaka.',
          en: 'Daily challenges and Karta Polaka prep.',
          de: 'Tägliche Challenges und Vorbereitung auf die Karta Polaka.',
          es: 'Retos diarios y preparación para la Karta Polaka.',
          fr: 'Défis quotidiens et préparation à la Karta Polaka.',
          pl: 'Codzienne wyzwania i przygotowanie do Karty Polaka.'
        },
        url: '#',
        features: {
          ru: ['Ежедневные челленджи', 'Курс Karta Polaka'],
          uk: ['Щоденні челенджі', 'Курс Karta Polaka'],
          en: ['Daily challenges', 'Karta Polaka course'],
          de: ['Tägliche Challenges', 'Karta-Polaka-Kurs'],
          es: ['Retos diarios', 'Curso Karta Polaka'],
          fr: ['Défis quotidiens', 'Cours Karta Polaka'],
          pl: ['Codzienne wyzwania', 'Kurs Karty Polaka']
        },
        comingSoon: true
      },
      {
        platform: 'web',
        title: 'Polski Online',
        description: {
          ru: 'Тесты на уровень, упражнения на ś, ć, ż и живые диалоги.',
          uk: 'Тести на рівень, вправи на ś, ć, ż і живі діалоги.',
          en: 'Level tests, ś/ć/ż exercises and real-life dialogues.',
          de: 'Einstufungstests, Übungen zu ś/ć/ż und lebendige Dialoge.',
          es: 'Pruebas de nivel, ejercicios de ś/ć/ż y diálogos reales.',
          fr: 'Tests de niveau, exercices sur ś/ć/ż et dialogues vivants.',
          pl: 'Testy poziomujące, ćwiczenia z ś/ć/ż i żywe dialogi.'
        },
        url: '#',
        features: {
          ru: ['Тест на уровень', 'Тренажёр произношения', 'Без установки'],
          uk: ['Тест на рівень', 'Тренажер вимови', 'Без встановлення'],
          en: ['Level test', 'Pronunciation trainer', 'No install needed'],
          de: ['Einstufungstest', 'Aussprachetrainer', 'Ohne Installation'],
          es: ['Prueba de nivel', 'Entrenador de pronunciación', 'Sin instalación'],
          fr: ['Test de niveau', 'Entraîneur de prononciation', 'Sans installation'],
          pl: ['Test poziomujący', 'Trener wymowy', 'Bez instalacji']
        }
      }
    ]
  }
]

export const findLanguage = (id: string) => languages.find((l) => l.id === id)
