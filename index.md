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
      link: test
    - theme: alt
      text: Всё о культурах
      link: test
    - theme: alt
      text: Моды
      link: test

features:
  - title: 📖 Открытый
    details: У нас большое сообщество и штат редакторов, которые дополняют портал
  - title: 👨‍🌾 Расширяемый
    details: У нас большое сообщество и штат редакторов, которые дополняют портал
  - title: 👨‍🌾 Расширяемый
    details: У нас большое сообщество и штат редакторов, которые дополняют портал
  - title: 👨‍🌾 Расширяемый
    details: У нас большое сообщество и штат редакторов, которые дополняют портал
  
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