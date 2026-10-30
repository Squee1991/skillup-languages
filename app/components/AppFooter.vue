<script setup lang="ts">
import { languages } from '~/data/languages'

const { t } = useI18n()
const { l } = useL10n()
const localePath = useLocalePath()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div>
        <NuxtLink :to="localePath('/')" class="logo">🌍 Skill<b>Up</b> <small>Languages</small></NuxtLink>
        <p class="about">{{ t('footer.about') }}</p>
      </div>

      <div>
        <h4>{{ t('footer.languages') }}</h4>
        <ul>
          <li v-for="lang in languages" :key="lang.id">
            <NuxtLink :to="localePath(`/languages/${lang.id}`)"><FlagIcon :id="lang.id" /> {{ l(lang.name) }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h4>{{ t('footer.contacts') }}</h4>
        <ul>
          <li><a href="#">✉️ hello@skilluplanguages.com</a></li>
          <li><a href="#">✈️ Telegram</a></li>
          <li><a href="#">📸 Instagram</a></li>
        </ul>
      </div>
    </div>
    <p class="copy">© {{ year }} SkillUp Languages. {{ t('footer.made') }}</p>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  color: #c7d2fe;
  padding: 56px 0 24px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 40px;
}

.logo {
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--on-color);
  text-decoration: none;
}

.logo b {
  color: var(--yellow);
}

.logo small {
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f9a8d4;
}

.about {
  margin-top: 8px;
  max-width: 340px;
}

h4 {
  color: var(--on-color);
  font-size: 1.2rem;
  margin-bottom: 12px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

ul a {
  text-decoration: none;
  font-weight: 600;
}

ul a:hover {
  color: var(--yellow);
}

.copy {
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
  padding: 4px 10px;
}

@media (max-width: 720px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>
