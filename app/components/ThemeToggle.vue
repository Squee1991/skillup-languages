<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n()
const button = ref<HTMLElement>()

const isDark = computed(() => colorMode.value === 'dark')

const toggle = async () => {
  const next = isDark.value ? 'light' : 'dark'
  const apply = async () => {
    colorMode.preference = next
    await nextTick()
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduceMotion || !button.value) return apply()

  // новая тема растекается кругом от кнопки по всей странице
  const r = button.value.getBoundingClientRect()
  const x = r.left + r.width / 2
  const y = r.top + r.height / 2
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  const transition = document.startViewTransition(apply)
  await transition.ready
  document.documentElement.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
    { duration: 700, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' }
  )
}
</script>

<template>
  <!-- на сервере тема неизвестна (может быть «как в системе»), поэтому кнопку рисуем только в браузере -->
  <ClientOnly>
    <button
      ref="button"
      class="sky"
      :class="{ night: isDark }"
      :aria-label="t('nav.toggleTheme')"
      :title="isDark ? t('nav.themeLight') : t('nav.themeDark')"
      @click="toggle"
    >
      <span class="stars" aria-hidden="true">
        <i /><i /><i />
      </span>
      <!-- солнце над горизонтом, луна — под ним; орбита вращается вокруг точки на горизонте:
           солнце уходит по дуге вправо за землю, луна поднимается слева -->
      <span class="orbit" aria-hidden="true">
        <span class="sun" />
        <span class="moon" />
      </span>
      <span class="horizon" aria-hidden="true" />
    </button>
    <template #fallback>
      <span class="sky placeholder" />
    </template>
  </ClientOnly>
</template>

<style scoped>
.sky {
  position: relative;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  padding: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #7dd3fc 0%, #e0f2fe 100%);
  border: var(--border);
  border-radius: 50%;
  box-shadow: 0 4px 0 var(--ink);
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.7s ease;
}

/* нажатие: кнопка проседает, а смена темы расходится от неё кругом */
.sky:active {
  transform: translateY(3px);
  box-shadow: 0 1px 0 var(--ink);
}

.sky.night {
  background: linear-gradient(180deg, #1e1b4b 0%, #4c1d95 100%);
}

.sky.placeholder {
  display: block;
  cursor: default;
}

/* центр вращения — середина линии горизонта */
.orbit {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 30px;
  transform-origin: 50% 100%;
  transition: transform 0.9s cubic-bezier(0.65, 0, 0.35, 1);
}

.night .orbit {
  transform: rotate(180deg);
}

.sun,
.moon {
  position: absolute;
  left: 50%;
  width: 18px;
  height: 18px;
  margin-left: -9px;
  border-radius: 50%;
}

.sun {
  top: 4px;
  background: #fbbf24;
  box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.35), 0 0 10px 2px rgba(251, 191, 36, 0.8);
}

/* луна зеркально под горизонтом и перевёрнута — после поворота окажется наверху как надо */
.moon {
  top: 38px;
  transform: rotate(180deg);
  background: transparent;
  box-shadow: inset -6px -3px 0 0 #fef9c3;
}

.horizon {
  position: absolute;
  z-index: 1;
  left: -4px;
  right: -4px;
  top: 28px;
  bottom: -4px;
  background: #86efac;
  border-top: 2px solid var(--ink);
  border-radius: 50% 50% 0 0;
  transition: background 0.7s ease;
}

.night .horizon {
  background: #166534;
}

.stars i {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.stars i:nth-child(1) {
  top: 8px;
  left: 9px;
}

.stars i:nth-child(2) {
  top: 14px;
  right: 8px;
}

.stars i:nth-child(3) {
  top: 22px;
  left: 14px;
}

.night .stars i {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0.45s;
  animation: twinkle 2s ease-in-out infinite 1s;
}

.night .stars i:nth-child(2) {
  animation-delay: 1.6s;
}

@keyframes twinkle {
  50% {
    opacity: 0.3;
  }
}
</style>
