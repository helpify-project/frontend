<template>
    <div class="container">
        <Categories v-model="chosenCategoryID"></Categories>
        <div class="posts">
            <div class="sort">
                <p>Sort</p>
                <Icon icon="ant-design:sort-ascending-outline"></Icon>
            </div>
            <div v-for="video in videos" class="post">
                <iframe width="100%" heigt="100%" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplahy; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import Categories from '../components/Categories.vue';

const chosenCategoryID = ref(0);

const videos = [
    "https://www.youtube.com/embed/z-IR48Mb3W0",
    "https://www.youtube.com/embed/8Su5VtKeXU8",
]
</script>

<style scoped>
.container {
    overflow-x: hidden;
    overflow-y: auto;
}

.sort {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    justify-content: end;
    padding: 1rem 0;
}

.posts {
    width: 100%;
    padding: 0 1rem;
}

.post img {
    width: 100%;
}
</style>