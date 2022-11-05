<template>
  <div>
    <h1>
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 18px;
}
</style>
