<template>
  <div>
    <Icon
        icon="ant-design:message-outlined"
        :width="26"
        :height="26"
        :horizontalFlip="true"
        @click="onChatRequest"
    ></Icon>

    <div @click="onBecomeAdministrator()">
        <h1>
        {{ title }}
        </h1>  
    </div>

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
import { jsonrpc } from '../stores/utils';

const router = useRouter();

async function onChatRequest () {
  const res = await jsonrpc("room_list", []);

  if (res.length > 0) {
    router.push({ name: 'chat', params: { id: res[0].id }});
    return;
  }

  const roomId = await jsonrpc("room_create", []);

  router.push({ name: 'chat', params: { id: roomId }});
  showModal.value = false;
}

async function onBecomeAdministrator () {
    const req = await fetch(import.meta.env.VITE_API_URL + "/chat/iamsupport", {
        method: "GET",
        credentials: 'include',
    });

    if (!req.ok) {
        throw new Error("Vittu");
    }
    return;
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
