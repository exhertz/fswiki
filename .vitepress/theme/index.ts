// https://vitepress.dev/guide/custom-theme
import { h, defineComponent, inject } from 'vue'
import { useRoute, type Theme } from 'vitepress'
import { setup } from '@css-render/vue3-ssr'
import { NConfigProvider } from 'naive-ui'

import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';

import 'viewerjs/dist/viewer.min.css';
import './fonts.css'
import './style.css'

const CssRenderStyle = defineComponent({
  setup () {
    const collect = inject('css-render-collect')
    return {
      style: collect()
    }
  },
  render () {
    return h('css-render-style', {
      innerHTML: this.style
    })
  }
})

const VitepressPath = defineComponent({
  setup () {
    const route = useRoute()
    return () => {
      return h('vitepress-path', null, [route.path])
    }
  }
})

const NaiveUIProvider = defineComponent({
  render () {
    return h(
      NConfigProvider,
      { abstract: true, inlineThemeDisabled: true },
      {
        default: () => [
          h(Layout, null, { default: this.$slots.default?.() }),
          import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null
        ]
      }
    )
  }
})

export default {
  extends: DefaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp: ({ app }) => {
    app.use('vImageViewer', vImageViewer);
    if (import.meta.env.SSR) {
      const { collect } = setup(app)
      app.provide('css-render-collect', collect)
    }
  },
  setup() {
    const route = useRoute();
    imageViewer(route);
}
} satisfies Theme

// export default {
//   extends: DefaultTheme,
//   Layout
// } satisfies Theme
