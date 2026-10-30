<script setup lang="ts">
import { languages } from '~/data/languages'
import LanguageMascot from '~/components/LanguageMascot.vue'

const open = ref(false)
const route = useRoute()

const links = [
  { href: '/#apps', label: 'Приложения', icon: '📱', color: '#fde68a' },
  { href: '/#features', label: 'Почему мы', icon: '💡', color: '#bae6fd' },
  { href: '/#how', label: 'Как это работает', icon: '🧭', color: '#bbf7d0' },
  { href: '/#reviews', label: 'Отзывы', icon: '💬', color: '#fbcfe8' }
]

const close = () => (open.value = false)
const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()

// закрываем меню при переходе и не даём странице скроллиться под ним
watch(() => route.fullPath, close)
watch(open, (v) => {
  document.documentElement.style.overflow = v ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.documentElement.style.overflow = ''
})
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo">
        <span class="logo-icon">🌍</span>
        <span class="logo-text">
          <span>Skill<b>Up</b></span>
          <small>Languages</small>
        </span>
      </NuxtLink>

      <nav class="nav">
        <NuxtLink v-for="link in links" :key="link.href" :to="link.href" class="nav-link">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/#apps" class="btn btn-yellow nav-cta">Выбрать язык</NuxtLink>
      </nav>

      <button class="burger" :aria-expanded="open" aria-label="Открыть меню" @click="open = true">
        <span /><span /><span />
      </button>
    </div>

    <!-- мобильное меню: выезжает справа -->
    <Teleport to="#teleports">
      <Transition name="drawer" :duration="{ enter: 700, leave: 350 }">
        <div v-if="open" class="drawer-root">
          <div class="overlay" @click="close" />

          <aside class="drawer" role="dialog" aria-modal="true" aria-label="Меню">
            <div class="drawer-head">
              <span class="drawer-title">Меню</span>
              <button class="close" aria-label="Закрыть меню" @click="close">✕</button>
            </div>

            <nav class="drawer-links">
              <NuxtLink
                v-for="(link, i) in links"
                :key="link.href"
                :to="link.href"
                class="drawer-link stagger"
                :style="{ '--c': link.color, '--i': i }"
                @click="close"
              >
                <span class="drawer-icon">{{ link.icon }}</span>
                {{ link.label }}
                <span class="drawer-arrow">→</span>
              </NuxtLink>
            </nav>

            <p class="drawer-subtitle stagger" :style="{ '--i': links.length }">Учить язык</p>
            <div class="drawer-langs stagger" :style="{ '--i': links.length + 1 }">
              <NuxtLink
                v-for="l in languages"
                :key="l.id"
                :to="`/languages/${l.id}`"
                class="drawer-lang"
                :style="{ '--accent-soft': l.colorSoft }"
                @click="close"
              >
                <LanguageMascot :id="l.id" class="drawer-mascot" />
                <span>{{ l.name }}</span>
              </NuxtLink>
            </div>

            <NuxtLink
              to="/#apps"
              class="btn btn-yellow drawer-cta stagger"
              :style="{ '--i': links.length + 2 }"
              @click="close"
            >
              🚀 Выбрать приложение
            </NuxtLink>
          </aside>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 248, 238, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
}

.logo b {
  color: var(--purple);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 0.9;
}

.logo-text small {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--pink);
}

.logo-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  font-size: 1.6rem;
  background: var(--yellow);
  border: var(--border);
  border-radius: 14px;
  box-shadow: 0 4px 0 var(--ink);
  animation: wiggle 3s ease-in-out infinite;
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  font-weight: 700;
  text-decoration: none;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 4px;
  border-radius: 4px;
  background: var(--pink);
  transition: width 0.2s ease;
}

.nav-link:hover::after {
  width: 100%;
}

@media (max-width: 1100px) and (min-width: 881px) {
  .nav {
    gap: 18px;
  }

  .nav-link:nth-child(3) {
    display: none;
  }
}

.nav-cta {
  padding: 8px 20px;
  font-size: 1rem;
}

.burger {
  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  background: var(--yellow);
  border: var(--border);
  border-radius: 14px;
  padding: 11px 10px;
  box-shadow: 0 4px 0 var(--ink);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.burger:hover {
  transform: rotate(-6deg) scale(1.05);
}

.burger:active {
  transform: translateY(3px);
  box-shadow: 0 1px 0 var(--ink);
}

.burger span {
  width: 22px;
  height: 3px;
  background: var(--ink);
  border-radius: 3px;
  transition: width 0.2s ease;
}

.burger span:nth-child(2) {
  width: 14px;
}

.burger:hover span:nth-child(2) {
  width: 22px;
}

/* ===== выезжающее меню ===== */
.drawer-root {
  position: fixed;
  inset: 0;
  z-index: 100;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(30, 27, 75, 0.45);
  backdrop-filter: blur(4px);
}

.drawer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(380px, 88vw);
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  background: linear-gradient(170deg, #8b5cf6 0%, var(--purple) 55%, #6d28d9 100%);
  border-left: var(--border);
  border-radius: 36px 0 0 36px;
  box-shadow: -8px 0 0 var(--ink);
}

.drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.drawer-title {
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--white);
}

.close {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--ink);
  background: var(--white);
  border: var(--border);
  border-radius: 50%;
  box-shadow: 0 4px 0 var(--ink);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.close:hover {
  transform: rotate(90deg);
}

.drawer-links {
  display: grid;
  gap: 12px;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--ink);
  background: var(--white);
  border: var(--border);
  border-radius: 20px;
  box-shadow: 0 5px 0 var(--ink);
  transition: transform 0.15s ease;
}

.drawer-link:hover {
  transform: translateX(-6px) rotate(-1deg);
}

.drawer-link:active {
  transform: translateY(3px);
}

.drawer-icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  font-size: 1.3rem;
  background: var(--c);
  border: var(--border);
  border-radius: 12px;
}

.drawer-arrow {
  margin-left: auto;
  font-weight: 800;
}

.drawer-subtitle {
  margin: 24px 0 10px;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ddd6fe;
}

.drawer-langs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.drawer-lang {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 10px 4px 8px;
  font-weight: 800;
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--ink);
  background: var(--accent-soft);
  border: var(--border);
  border-radius: 18px;
  box-shadow: 0 4px 0 var(--ink);
  transition: transform 0.15s ease;
}

.drawer-lang:hover {
  transform: translateY(-4px) rotate(-2deg);
}

.drawer-mascot {
  width: 54px;
}

.drawer-cta {
  justify-content: center;
  margin-top: 24px;
}

/* анимация открытия: фон проявляется, панель выезжает с пружинкой, пункты появляются по очереди */
.drawer-enter-active .overlay,
.drawer-leave-active .overlay {
  transition: opacity 0.3s ease;
}

.drawer-enter-from .overlay,
.drawer-leave-to .overlay {
  opacity: 0;
}

.drawer-enter-active .drawer {
  transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.drawer-leave-active .drawer {
  transition: transform 0.3s ease-in;
}

.drawer-enter-from .drawer,
.drawer-leave-to .drawer {
  transform: translateX(110%);
}

.drawer-enter-active .stagger {
  transition: opacity 0.3s ease, translate 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: calc(0.15s + var(--i) * 0.06s);
}

.drawer-enter-from .stagger {
  opacity: 0;
  translate: 40px 0;
}

@media (max-width: 380px) {
  .drawer {
    padding: 16px 14px;
  }

  .drawer-link {
    gap: 10px;
    padding: 10px 12px;
    font-size: 1.1rem;
  }

  .drawer-icon {
    width: 34px;
    height: 34px;
    font-size: 1.1rem;
  }

  .drawer-cta {
    font-size: 1rem;
    padding: 12px 16px;
    white-space: nowrap;
  }
}

@media (max-width: 880px) {
  .header-inner {
    height: 64px;
  }

  .logo {
    font-size: 1.5rem;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }

  .logo-text small {
    font-size: 0.7rem;
  }

  .burger {
    display: flex;
  }

  .nav {
    display: none;
  }
}
</style>
