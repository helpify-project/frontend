<template>
    <div class="container">
        <div class="categories">
            <div v-for="c in categories" class="category">
                <img :src="require(`@/assets/${c}.png`)" alt>
                <p>{{ c }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref([]);
</script>

<style lang="scss" scoped>

</style>