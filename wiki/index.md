---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "fswiki.ru"
  text: Справочник по Farming Simulator 25
  tagline: Сделайте ферму выдающейся!
  actions:
    - theme: brand
      text: Перейти ➜ 
      link: introduction
    - theme: alt
      text: Быстрый старт
      link: /
    - theme: alt
      text: Всё о культурах
      link: /
    - theme: alt
      text: Моды
      link: /

features:
  - title: 📖 Открытый
    details: Доступен каждому, без авторских прав. Всё пренадлежит игрокам.
  - title: 👨‍🌾 Расширяемый
    details: У нас большое сообщество и штат редакторов, которые делятся информацией.
  - title: 💬 Комментарии
    details: Для обсуждения на каждой страницей есть комментарии, регистрация необязательна.
  
---
 
<style>
.VPNav .container {
    max-width: 1152px;
}

.VPHomeHero {
    background-image: linear-gradient(transparent 50px, var(--vp-c-bg)), url('/images/landing/main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
    
}
.VPHomeFeatures {
    margin-top: 30px;
}
</style> 

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const mins = new Date().getMinutes()
  const imgNumber = Math.trunc(mins / 15)
  
  const heroBlock = document.querySelector('.VPHomeHero')
  if (heroBlock) {
    heroBlock.style.backgroundImage = `linear-gradient(transparent 50px, var(--vp-c-bg)), url('/images/landing/${imgNumber}.jpg')`
  } else {
    console.error(".VPHomeHero not found, bruh :(")
  }
})
</script>