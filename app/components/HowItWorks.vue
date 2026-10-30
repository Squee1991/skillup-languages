<script setup lang="ts">
const steps = [
  { n: 1, icon: '🌍', title: 'Выбери язык', text: 'Немецкий, испанский или польский — что ближе к твоей цели.', color: 'var(--yellow)' },
  { n: 2, icon: '📲', title: 'Скачай приложение', text: 'Android, iOS или сайт — как тебе удобнее.', color: 'var(--sky)' },
  { n: 3, icon: '🏆', title: 'Занимайся и расти', text: 'Пройди тест на уровень и получай награды за каждый день.', color: 'var(--green)' }
]
</script>

<template>
  <section id="how" class="section how">
    <div class="container">
      <span class="tag tag-center">🧭 Как начать</span>
      <h2 class="section-title">Три шага до первого «Hallo!»</h2>
      <p class="section-subtitle">Никаких сложных регистраций — начать можно уже через минуту.</p>

      <ol class="steps">
        <li v-for="s in steps" :key="s.n" class="step">
          <span class="num" :style="{ background: s.color }">{{ s.n }}</span>
          <div class="step-icon">{{ s.icon }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.how {
  background: linear-gradient(180deg, #e0f2fe 0%, #fef3c7 100%);
  border-block: var(--border);
}

.tag-center {
  display: table;
  margin: 0 auto 16px;
  background: var(--sky);
}

.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  position: relative;
}

.steps::before {
  content: '';
  position: absolute;
  top: 70px;
  left: 16%;
  right: 16%;
  border-top: 4px dashed var(--ink);
  opacity: 0.3;
}

.step {
  position: relative;
  text-align: center;
  background: var(--white);
  border: var(--border);
  border-radius: var(--radius);
  padding: 40px 24px 28px;
  box-shadow: var(--shadow-pop);
}

.num {
  position: absolute;
  top: -22px;
  left: 50%;
  translate: -50% 0;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  border: var(--border);
  border-radius: 50%;
}

.step-icon {
  font-size: 3.2rem;
  margin-bottom: 8px;
}

.step h3 {
  font-size: 1.6rem;
  margin-bottom: 6px;
}

.step p {
  color: var(--ink-soft);
}

@media (max-width: 820px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .steps::before {
    display: none;
  }
}
</style>
