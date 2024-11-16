---
order: 0
---

# Новости

<div class="news-list">
  <NewsCard
    v-for="news in newsData"
    :key="news.title"
    :news="news"
  />
</div>

<script setup>
import { reactive } from 'vue';
import NewsCard from '@theme/components/NewsCard.vue';

const newsData = reactive([
  {
    preview: '/images/news/news_672cb211a9fa1.jpg',
    title: 'Самый милый показ: Детёныши животных, разнообразие и динамичные пастбища',
    date: 'Ноябрь 10, 2024',
    content: [
      {
        type: 'image',
        src: '/images/news/news_672b6f01105a1.jpg',
        style: 'padding: 0 0 10px 0'
      },
      {
        type: 'heading',
        text: 'Самый милый показ: Детёныши животных, разнообразие и динамичные пастбища'
      },
      {
        type: 'text',
        text: 'Непосредственно перед запуском Farming Simulator 25 мы подумали, что немного милоты будет как раз кстати. Начнём с GIF, который вы буквально можете услышать:'
      },
      {
        type: 'video',
        src: 'https://i.imgur.com/WpZO6qY.mp4'
      },
      {
        type: 'text',
        text: 'Мы даже побеседовали с нашим старшим аниматором Рахулем Нарде о очаровательных анимациях новорожденных и юных существ на четырёх ногах. Две ноги... потому что цыплята. Посмотрите интервью ниже. Там будет больше детских GIF, чтобы удержать ваше внимание.'
      },
      {
        type: 'video',
        src: 'https://i.imgur.com/9NgFEM0.mp4'
      },
      {
        type: 'text',
        text: 'Есть еще кое-что! Мы получили информацию о типах животных и об адаптации животного пространства - как можно создать заборы для ограждений. Это означает больше индивидуальных фермерских хозяйств, которые сосредоточены на животноводстве. Разве это не здорово?'
      },
      {
        type: 'heading',
        text: 'Создавайте собственные загоны и пастбища'
      },
      {
        type: 'image',
        src: '/images/news/news_672cb211a9fa1.jpg'
      },
      {
        type: 'image',
        src: '/images/news/news_672cb211ad79e.jpg'
      },
      {
        type: 'image',
        src: '/images/news/news_672cb20112636.jpg'
      }
    ]
  }
]);
</script>