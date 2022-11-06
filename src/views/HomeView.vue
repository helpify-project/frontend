<template>
    <div class="container">
        <Categories v-model="chosenCatId"></Categories>
        <div class="posts">
            <div class="sort">
                <p>Sort</p>
                <Icon icon="ant-design:sort-ascending-outline"></Icon>
            </div>
            <div v-for="post in posts" class="post">
                <img :src="post" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Categories from '@/components/Categories.vue';
import { Icon } from '@iconify/vue';

const chosenCatId = ref(0);

const posts = ref([]);

onMounted(() => {
    
    const p = [];

    for (let i = 1; i < 5; i++) {
        p.push(
            new URL(`../assets/posts/post${i}.jpg`, import.meta.url).href
        )
    }

    posts.value = p;
})
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