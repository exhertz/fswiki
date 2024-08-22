<script setup lang="ts">
import { useData } from 'vitepress'

const { title } = useData()
</script>

<template>
  <div :key="title" style="margin-top: 50px;">
    <component
      :is="'script'"
      src="https://comments.fswiki.ru/comentario.js"
      defer="true"
      async
    />
    <comentario-comments css-override="https://fswiki.ru/comments.css" lang="ru" no-fonts="true" ></comentario-comments>
  </div>
</template>