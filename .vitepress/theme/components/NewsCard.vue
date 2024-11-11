<template>
<n-card 
    style="margin: 20px 0;" 
    content-style="padding:20px;"
    @click="openNews"
    class="news-card"
>
    <ImageView @click="openNews" preview-disabled :src="news.preview" alt="Изображение не загрузилось :(" />
    <template #footer>
    <h5 class="news-title">{{ news.title }}</h5>
    <p style="margin:0; color:var(--vp-c-text-2)">{{ news.date }}</p>
    </template>
</n-card>

<n-modal
    v-model:show="showModal"
    class="news-container"
    preset="card"
    :bordered="true"
    size="huge"
>
    <n-scrollbar style="max-height: 75vh" trigger="none">
    <div class="content">
        <n-space vertical>
        <template v-for="(content, idx) in news.content" :key="idx">
            <ImageView
            v-if="content.type === 'image'" 
            :src="content.src" 
            :alt="content.alt || 'Изображение не загрузилось :('"
            :style="content.style"
            />
            <video 
            v-else-if="content.type === 'video'" 
            autoplay 
            loop 
            muted
            >
            <source :src="content.src" type="video/mp4">
            Ваш браузер не поддерживает тег video.
            </video>
            <h2 v-else-if="content.type === 'heading'">{{ content.text }}</h2>
            <p v-else-if="content.type === 'text'">{{ content.text }}</p>
        </template>
        </n-space>
    </div>
    </n-scrollbar>
</n-modal>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import {
NCard,
NModal,
NScrollbar,
NImage,
NSpace,
} from 'naive-ui';
import ImageView from './ImageView.vue';

const props = defineProps({
news: {
    type: Object,
    required: true
}
});

const showModal = ref(false);

const openNews = () => {
showModal.value = true;
};
</script>

<style scoped>

.content {
padding-right: 20px;
}
.news-card {
cursor: pointer;
transition: transform 0.2s;
}
.news-card:hover {
transform: translateY(-2px);
}
.news-title {
cursor: pointer;
}
img, video {
padding: 10px 0;
}
h2 {
font-weight: 700;
font-size: 18px;
padding: 14px 0;
}
.n-card__action {
padding: 2px;
}

</style>

<style>
.news-container {
width: 700px;
max-height: 100vh;
overflow-y: auto;
}
@media (max-width: 768px) {
.news-container {
    width: 100%;
}
}
</style>