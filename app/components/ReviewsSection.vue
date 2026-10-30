<script setup lang="ts">
const reviews = [
  { name: 'Анна', avatar: '👩‍💼', lang: '🇩🇪', text: 'Наконец-то поняла артикли! Учу немецкий в метро и за 3 месяца дошла до A2.', color: '#fef3c7' },
  { name: 'Дмитрий', avatar: '🧑‍💻', lang: '🇵🇱', text: 'Переехал в Варшаву — приложение реально спасло в первые недели. Падежи больше не пугают.', color: '#fce7f3' },
  { name: 'Мария', avatar: '👩‍🎨', lang: '🇪🇸', text: 'Сова Скилли не даёт пропускать дни 😅 Уже 120 дней подряд, говорю с испанцами в отпуске!', color: '#fee2e2' }
]
</script>

<template>
  <section id="reviews" class="section">
    <div class="container">
      <span class="tag tag-center">💬 Отзывы</span>
      <h2 class="section-title">Нас любят ученики</h2>
      <p class="section-subtitle">Тысячи людей уже заговорили на новом языке. Следующий — ты!</p>

      <div class="reviews">
        <figure v-for="r in reviews" :key="r.name" class="review" :style="{ background: r.color }">
          <div class="stars">★★★★★</div>
          <blockquote>«{{ r.text }}»</blockquote>
          <figcaption>
            <span class="avatar">{{ r.avatar }}</span>
            <b>{{ r.name }}</b>
            <span class="flag">{{ r.lang }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tag-center {
  display: table;
  margin: 0 auto 16px;
  background: #fbcfe8;
}

.reviews {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.review {
  margin: 0;
  border: var(--border);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow-pop);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.review:nth-child(2) {
  transform: rotate(1.5deg);
}

.review:nth-child(odd) {
  transform: rotate(-1deg);
}

.stars {
  color: var(--orange);
  font-size: 1.4rem;
  letter-spacing: 2px;
}

blockquote {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  flex: 1;
}

figcaption {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  font-size: 1.6rem;
  background: var(--white);
  border: var(--border);
  border-radius: 50%;
}

.flag {
  margin-left: auto;
  font-size: 1.6rem;
}

@media (max-width: 400px) {
  .reviews {
    grid-template-columns: 1fr;
  }
}
</style>
