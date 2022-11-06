<template>
  <div>
    <Icon
        icon="ant-design:message-outlined"
        :width="26"
        :height="26"
        :horizontalFlip="true"
        @click="onChatRequest"
    ></Icon>

    <h1>
      {{ title }}
    </h1>

    <Icon
        icon="ant-design:search-outlined"
        :width="26"
        :height="26"
    ></Icon>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function onChatRequest () {
  router.push({ name: 'chat', params: { id: 1 }});
}

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
