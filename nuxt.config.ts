export default defineNuxtConfig({
    compatibilityDate: '2026-10-01',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            htmlAttrs: {lang: 'ru'},
            title: 'SkillUp Languages — учи языки играючи',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'SkillUp Languages — яркие приложения для изучения немецкого, испанского и польского языков на Android, iOS и в браузере.'
                },
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
