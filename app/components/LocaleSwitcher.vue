<script setup lang="ts">
// inline — кнопки в ряд (для мобильного меню), иначе — выпадающий список (для шапки)
defineProps<{ inline?: boolean }>()

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const short: Record<string, string> = { ru: 'RU', uk: 'UA', en: 'EN', de: 'DE', es: 'ES', fr: 'FR', pl: 'PL' }

const open = ref(false)
const root = ref<HTMLElement>()

const onClickOutside = (e: MouseEvent) => {
  if (root.value && !root.value.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div v-if="inline" class="inline" :aria-label="t('nav.siteLanguage')">
    <NuxtLink
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      class="pill"
      :class="{ active: l.code === locale }"
    >
      {{ short[l.code] }}
    </NuxtLink>
  </div>

  <div v-else ref="root" class="dropdown">
    <button
      class="trigger"
      :aria-expanded="open"
      :aria-label="t('nav.siteLanguage')"
      @click="open = !open"
    >
      {{ short[locale] }}
      <span class="caret" :class="{ open }">▾</span>
    </button>

    <Transition name="pop">
      <ul v-if="open" class="menu">
        <li v-for="l in locales" :key="l.code">
          <NuxtLink
            :to="switchLocalePath(l.code)"
            class="option"
            :class="{ active: l.code === locale }"
            @click="open = false"
          >
            <b>{{ short[l.code] }}</b>
            {{ l.name }}
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
}

.trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 76px;
  height: 44px;
  padding: 0;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: var(--text);
  background: var(--white);
  border: var(--border);
  border-radius: 999px;
  box-shadow: 0 4px 0 var(--ink);
  cursor: pointer;
  transition: transform 0.15s ease;
}

.trigger:hover {
  transform: translateY(-2px);
}

.caret {
  transition: transform 0.2s ease;
}

.caret.open {
  transform: rotate(180deg);
}

.menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 60;
  min-width: 190px;
  margin: 0;
  padding: 8px;
  list-style: none;
  background: var(--white);
  border: var(--border);
  border-radius: 20px;
  box-shadow: 0 6px 0 var(--ink);
}

.option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  font-weight: 700;
  text-decoration: none;
  color: var(--text);
  border-radius: 12px;
  transition: background 0.15s ease;
}

.option b {
  display: grid;
  place-items: center;
  width: 34px;
  font-size: 0.8rem;
  padding: 2px 0;
  color: var(--ink);
  background: var(--yellow);
  border: 2px solid var(--ink);
  border-radius: 8px;
}

.option:hover {
  background: var(--surface-muted);
}

.option.active {
  background: color-mix(in srgb, var(--purple) 18%, var(--white));
}

.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

.inline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.pill {
  padding: 8px 0;
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  text-decoration: none;
  color: var(--text);
  background: color-mix(in srgb, var(--white) 85%, transparent);
  border: var(--border);
  border-radius: 999px;
  transition: transform 0.15s ease;
}

.pill:hover {
  transform: translateY(-2px);
}

.pill.active {
  color: var(--ink);
  background: var(--yellow);
  box-shadow: 0 3px 0 var(--ink);
}
</style>
