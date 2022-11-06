<template>
    <div class="categories">
        <div v-for="c, index in categories" class="category" :class="{active: index == chosenCatId}" @click="onCategoryClick(index)">
            <img :src="c.url" alt>
            <p>{{ c.name }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const categories = ref([]);

const chosenCatId = computed({
    get () {
        return props.modelValue
    },
    set (value) {
        emit('update:modelValue', value)
    }
})

const onCategoryClick = (id) => {
    if (id == chosenCatId.value) return;
    chosenCatId.value = id;
}

categories.value = [
    'depression', 'loneliness', 'suicide', 'anxiety',  
]

onMounted(() => {
    categories.value = categories.value.map((c) => {
        const url = new URL(`../assets/categories/${c}.jpg`, import.meta.url).href

        return {
            name: c,
            url
        }
    })
})
</script>

<style scoped>
.categories {
    display: flex;
    width: 100%;

    padding: 1rem 0;

    overflow-x: auto;
}

.categories::-webkit-scrollbar { width: 0 !important }

.category {
    display: grid;
    width: 5.5rem;
    height: 5.5rem;
    min-width: 5.5rem;

    place-items: center;
    aspect-ratio: 1;

    overflow: hidden;

    border-radius: 1rem;
    margin-left: 1rem;
}

.category.active {
    border: 4px solid var(--blue);
}

.category:last-child {
    margin-right: 1rem;
}

.category img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;

    grid-column: 1;
    grid-row: 1;

    filter: brightness(50%);
}

.category p {
    grid-column: 1;
    grid-row: 1;
    color: white;

    font-size: 12px;
    text-transform: uppercase;
}
</style>