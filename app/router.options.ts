import type { RouteLocationNormalized } from 'vue-router'
import type { RouterConfig } from '@nuxt/schema'

// i18n называет маршруты «index___uk», «languages-id___en» — без суффикса это одна и та же страница
const samePage = (a: RouteLocationNormalized, b: RouteLocationNormalized) =>
  String(a.name).split('___')[0] === String(b.name).split('___')[0] &&
  JSON.stringify(a.params) === JSON.stringify(b.params)

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // сменили язык сайта — остаёмся на том же месте страницы
    if (from.name && samePage(to, from) && to.hash === from.hash) return false

    const position = savedPosition || (to.hash ? { el: to.hash, top: 84, behavior: 'smooth' as const } : { top: 0 })

    // переход внутри страницы (например, к #apps) — сразу
    if (to.path === from.path) return position

    // переход на другую страницу — ждём, пока она отрисуется после анимации
    const nuxtApp = useNuxtApp()
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce('page:finish', () => {
        requestAnimationFrame(() => resolve(position))
      })
    })
  }
}
