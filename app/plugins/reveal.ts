export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  const getObserver = () =>
    (observer ??= new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const el = e.target as HTMLElement
          observer!.unobserve(el)
          el.classList.add('revealed')
          // после анимации убираем классы, чтобы не мешать собственным hover-эффектам блока
          const done = (a: AnimationEvent) => {
            if (a.target !== el || a.animationName !== 'reveal-in') return
            el.classList.remove('reveal', 'revealed')
            el.removeEventListener('animationend', done)
          }
          el.addEventListener('animationend', done)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    ))

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: () => ({}),
    mounted(el, { value }) {
      if (import.meta.server || matchMedia('(prefers-reduced-motion: reduce)').matches) return
      if (el.getBoundingClientRect().top < innerHeight) return
      if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
      el.classList.add('reveal')
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    }
  })
})
