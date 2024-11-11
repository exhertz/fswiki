<template>
    <n-image
        v-bind="$attrs"
        :render-toolbar="renderToolbar"
    />
</template>

<script setup lang="ts">
import { NImage } from 'naive-ui'
import type { ImageRenderToolbarProps } from 'naive-ui'

const renderToolbar = ({ nodes }: ImageRenderToolbarProps) => [
    nodes.zoomIn,
    nodes.zoomOut,
    nodes.prev,
    nodes.next,
    nodes.rotateClockwise,
    nodes.close
]
</script>

<style scoped>
</style>