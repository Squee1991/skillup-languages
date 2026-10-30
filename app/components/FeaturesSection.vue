<script setup lang="ts">
const features = [
  { icon: '🎮', title: 'Игры вместо зубрёжки', text: 'Слова и грамматика закрепляются через мини-игры, квизы и челленджи.', color: '#fde68a' },
  { icon: '⏱️', title: '5 минут в день', text: 'Короткие уроки легко вписать в дорогу, обед или перерыв.', color: '#bae6fd' },
  { icon: '🗣️', title: 'Живое произношение', text: 'Озвучка носителями и тренажёр речи с подсказками.', color: '#fbcfe8' },
  { icon: '🔥', title: 'Серии и награды', text: 'Сова Скилли следит за серией дней и дарит бонусы за упорство.', color: '#fed7aa' },
  { icon: '📱', title: 'Везде с тобой', text: 'Android, iOS и сайт — прогресс синхронизируется между устройствами.', color: '#bbf7d0' },
  { icon: '🎯', title: 'По уровням A1–B2', text: 'Программа выстроена по европейской шкале CEFR — от нуля до свободы.', color: '#ddd6fe' }
]
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <span class="tag tag-center">💡 Почему SkillUp Languages</span>
      <h2 class="section-title">Учиться — легко и в кайф</h2>
      <p class="section-subtitle">Мы сделали всё, чтобы язык стал любимой привычкой, а не скучной обязанностью.</p>

      <div class="grid">
        <article
          v-for="(f, i) in features"
          :key="f.title"
          class="feature"
          :style="{ '--c': f.color, '--tilt': (i % 2 ? 1 : -1) + 'deg' }"
        >
          <div class="icon">{{ f.icon }}</div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tag-center {
  display: table;
  margin: 0 auto 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.feature {
  background: var(--white);
  border: var(--border);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow-pop);
  transition: transform 0.2s ease;
}

.feature:hover {
  transform: rotate(var(--tilt)) translateY(-6px);
}

.icon {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  font-size: 2.2rem;
  background: var(--c);
  border: var(--border);
  border-radius: 50% 40% 55% 45%;
  margin-bottom: 18px;
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.feature p {
  color: var(--ink-soft);
}

@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
