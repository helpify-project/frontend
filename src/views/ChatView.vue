<template>
    <div class="container">
        <div class="intro">
            <p>You are chatting with <span>{{ help_type }}</span><br>
            All chats remain anonymous.</p>
        </div>
        <div v-for="message in messages" class="message receiver" :class="{ receiver: message.userType == 1, sender: message.userType == 0}">
            <img v-if="message.userType == 1" :src="anyone" />
            <p>{{ message.message }}</p>
            <img v-if="message.userType == 0" :src="anon" />
        </div>
        <div class="new-message">
            <div class="inputwrapper">
                <input type="text" v-model="newMessageText">
                <Icon icon="ant-design:send-outlined" :height="26" :width="26" @click="onSendText()"></Icon>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { jsonrpc } from '../stores/utils';
import { useRoute } from 'vue-router';

import anyone from '@/assets/anyone.png';
import anon from '@/assets/anon.png';

const route = useRoute();

const newMessageText = ref("");

const messages = ref([]);

const help_type = ref("Anyone");

let intervalnr;

onMounted(async () => {
    const roomId = route.params.id;

    intervalnr = setInterval(async () => {
        messages.value = await jsonrpc("chat_history", [ roomId ]);
    }, 1500);
});

onUnmounted(async () => {
    clearInterval(intervalnr);
})

const onSendText = async () => {
    const roomId = route.params.id;

    await jsonrpc("chat_send", [{ roomId, message: newMessageText.value }]);

    newMessageText.value = "";
}

</script>

<style scoped>

.container {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    height: 100%;
    flex-direction: column;
    padding-bottom: 16rem;
}
.new-message {
    display: flex;
    position: fixed;
    bottom: 6rem;
    width: 100%;
    padding: 1rem;
}

.inputwrapper {
    display: flex;

    border: 2px solid var(--grey);
    border-radius: 999px;

    padding: 0.5rem 0.5rem 0.5rem 1rem;
    column-gap: 1rem;

    width: 100%;
    transition: border 200ms ease;
    background-color: white;
}

.inputwrapper:focus-within {
    border: 2px solid var(--blue);
}

input {
    border: none;
    width: 100%;
    outline: none;
}

.intro {
    text-align: center;
    margin: 1rem 0;
    color: var(--grey);
}

.intro span {
    color: var(--blue);
}

.intro p,
.intro span {
    font-weight: 600;
}

.message {
    display: grid;
    padding: 0.5rem 1rem;
    column-gap: 1rem;
}

.message p {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: rgba(1, 1, 1, 0.05);
}

.message img {
    width: 32px;
    height: 32px;
}

.message.receiver {
    grid-template-columns: min-content 1fr;
}

.message.sender {
    grid-template-columns: 1fr min-content;
}

.message.sender p {
    background-color: var(--blue);
    color: white;
}
</style>