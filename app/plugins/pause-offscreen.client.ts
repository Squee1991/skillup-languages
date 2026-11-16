// Маскоты, пятна, искорки и конфетти анимируются бесконечно. Анимации внутри SVG браузер перерисовывает
// на каждом кадре, даже если их не видно, и на телефоне это отнимает кадры у прокрутки.
// Поэтому секции за пределами экрана получают класс .offscreen — их анимации стоят на паузе (main.css).
export default defineNuxtPlugin((nuxtApp) => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        // секция ушла со страницы после перехода — больше не следим
        if (!e.target.isConnected) observer.unobserve(e.target)
        else e.target.classList.toggle('offscreen', !e.isIntersecting)
      }
    },
    { rootMargin: '100px 0px' }
  )
  const watched = new WeakSet<Element>()

  const scan = () => {
    for (const el of document.querySelectorAll('main section, footer')) {
      if (watched.has(el)) continue
      watched.add(el)
      observer.observe(el)
    }
  }

  nuxtApp.hook('app:mounted', scan)
  nuxtApp.hook('page:finish', scan)
})
