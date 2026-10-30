<script setup lang="ts">
const open = ref(false)

const links = [
  { href: '#apps', label: 'Приложения' },
  { href: '#features', label: 'Почему мы' },
  { href: '#how', label: 'Как это работает' },
  { href: '#reviews', label: 'Отзывы' }
]
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <a href="#" class="logo">
        <span class="logo-icon">🦉</span>
        <span class="logo-text">
          <span>Skill<b>Up</b></span>
          <small>Languages</small>
        </span>
      </a>

      <nav class="nav" :class="{ open }">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="open = false">
          {{ link.label }}
        </a>
        <a href="#apps" class="btn btn-yellow nav-cta" @click="open = false">Выбрать язык</a>
      </nav>

      <button class="burger" :aria-expanded="open" aria-label="Меню" @click="open = !open">
        <span /><span /><span />
      </button>
    </div>
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

.nav a:not(.btn) {
  font-weight: 700;
  text-decoration: none;
  position: relative;
}

.nav a:not(.btn)::after {
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

.nav a:not(.btn):hover::after {
  width: 100%;
}

.nav-cta {
  padding: 8px 20px;
  font-size: 1rem;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: var(--white);
  border: var(--border);
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
}

.burger span {
  width: 22px;
  height: 3px;
  background: var(--ink);
  border-radius: 3px;
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
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 18px;
    padding: 24px;
    background: var(--bg);
    border-bottom: var(--border);
    transform: translateY(-120%);
    transition: transform 0.25s ease;
    z-index: -1;
  }

  .nav.open {
    transform: none;
  }
}
</style>
