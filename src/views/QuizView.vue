<template>
    <div class="container">
        <Categories v-model="chosenCatId"></Categories>
        <div class="quizes">
            <div class="sort">
                <p>Sort</p>
                <Icon icon="ant-design:sort-ascending-outline"></Icon>
            </div>
            <div v-for="quiz in quizes" class="quiz">
                <img :src="quiz" alt>
            </div>
        </div>
    </div>
</template>

<script setup>

import sixteenPersonalities from "@/assets/quizes/sixteenPersonalities.png";
import emotionalIntelligence from "@/assets/quizes/emotionalIntelligence.jpg";
import depression from "@/assets/quizes/depression.jpg";
import Categories from "@/components/Categories.vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const chosenCatId = ref(0);

const quizes = [
    sixteenPersonalities,
    emotionalIntelligence,
    depression,
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

.quizes {
    width: 100%;
    padding: 0 1rem;
}

.quiz img {
    width: 100%;
}
</style>