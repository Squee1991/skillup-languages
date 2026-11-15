// Смена языка сайта (/ → /uk) — тоже переход по адресу, и Nuxt запускал бы View Transition.
// Но страница при этом не пересоздаётся (см. pageKey в app.vue), сигнал page:finish не приходит,
// и браузер держал бы замороженную картинку до таймаута. Поэтому для смены языка переход выключаем.
export default defineNuxtPlugin(() => {
  const router = useRouter()
  const base = (name: unknown) => String(name).split('___')[0]

  router.beforeEach((to, from) => {
    if (base(to.name) === base(from.name) && JSON.stringify(to.params) === JSON.stringify(from.params)) {
      to.meta.viewTransition = false
    }
  })
})
