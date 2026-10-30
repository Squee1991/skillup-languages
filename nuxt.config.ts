export default defineNuxtConfig({
    compatibilityDate: '2026-10-01',
    devtools: {enabled: true},
    modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode'],
    css: ['~/assets/css/main.css'],

    // переводы лежат в i18n/locales/*.json, русский — без префикса в адресе (/), остальные — /uk, /en
    i18n: {
        baseUrl: 'https://skillup-languages.vercel.app',
        defaultLocale: 'ru',
        strategy: 'prefix_except_default',
        locales: [
            {code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json'},
            {code: 'uk', language: 'uk-UA', name: 'Українська', file: 'uk.json'},
            {code: 'en', language: 'en-US', name: 'English', file: 'en.json'}
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'skillup_lang',
            redirectOn: 'root'
        }
    },

    // тема: класс .light / .dark на <html>, по умолчанию — как в системе
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'light',
        storageKey: 'skillup-color-mode'
    },

    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'theme-color', content: '#7c3aed'}
            ],
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@400;600;700;800&display=swap'
                }
            ]
        }
    }
})
