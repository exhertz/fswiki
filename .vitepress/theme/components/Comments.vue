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
    <comentario-comments css-override="/comments.css"></comentario-comments>
  </div>
</template>