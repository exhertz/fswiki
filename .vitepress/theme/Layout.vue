<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue';
import { NModalProvider, NConfigProvider, darkTheme } from 'naive-ui';
import Comments from './components/Comments.vue'

const { isDark } = useData()
const { Layout } = DefaultTheme

const theme = computed(() => isDark.value ? darkTheme : null);
const themeOverrides = {
    common: {
      primaryColor: '#57A72D',
      primaryColorHover: '#57A72D',
      primaryColorSuppl: '#57A72D'
    }
    // ...
  }
</script>

<template>
  <n-config-provider :theme=theme :theme-overrides="themeOverrides">
  <n-modal-provider>
  <Layout>
    <template #doc-after v-if="$frontmatter.comments === true">
      <Comments />
    </template>
  </Layout>
</n-modal-provider>
</n-config-provider>
</template>