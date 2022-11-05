<script setup>
import { RouterLink, RouterView } from "vue-router";
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { Multiselect } from "vue-multiselect";

const helpTypeOptions = [
  "Anyone",
  "Psychiatrists",
  "Helplines",
  "Social Organisations",
  "Psychology Students",
];

const helpType = ref("");

const showModal = ref(false);

const onCallRequest = () => {
  return;
}

const onChatRequest = () => {
  return;
}

const onHelpRequest = () => {
  showModal.value = true;
}

const onModalClose = () => {
  showModal.value = false;
}
</script>

<template>
  <div class="layout">
    <RouterView class="topbar" name="topbar"></RouterView>
    <RouterView></RouterView>
    <nav>
      <RouterLink :to="{ name: 'home' }" draggable="false">
        <div class="navlink">
          <Icon icon="ant-design:home-outlined" :width="26" :height="26"></Icon>
          <p>Home</p>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'videos' }" draggable="false">
        <div class="navlink">
          <Icon
            icon="ant-design:play-square-outlined"
            :width="26"
            :height="26"
          ></Icon>

          <p>Videos</p>
        </div>
      </RouterLink>
      <div class="help" @click="onHelpRequest()">
        <div class="help__inner">
          <Icon
            icon="ant-design:phone-outlined"
            :width="48"
            :height="48"
            :horizontalFlip="true"
          ></Icon>
        </div>
      </div>
      <RouterLink :to="{ name: 'map' }" draggable="false">
        <div class="navlink">
          <Icon
            icon="ant-design:environment-outlined"
            :width="26"
            :height="26"
          ></Icon>
          <p>Map</p>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'directory' }" draggable="false">
        <div class="navlink">
          <Icon
            icon="ant-design:idcard-outlined"
            :width="26"
            :height="26"
          ></Icon>
          <p>Contacts</p>
        </div>
      </RouterLink>
    </nav>
    <div class="help-modal__wrapper" :class="{show: showModal}">
      <div class="help-modal">
        <Icon icon="ant-design:close-circle-outlined" class="close" @click="onModalClose()" :height="28" :width="28"></Icon>
        <p>I want to speak to</p>
        <Multiselect v-model="helpType" :options="helpTypeOptions">
        </Multiselect>

        <div class="help-types">
          <div class="help" @click="onCallRequest()">
            <div class="help__inner">
              <Icon
                icon="ant-design:phone-outlined"
                :width="48"
                :height="48"
                :horizontalFlip="true"
              ></Icon>
            </div>
          </div>
          <div class="help" @click="onChatRequest()">
            <div class="help__inner">
              <Icon
                icon="ant-design:message-outlined"
                :width="48"
                :height="48"
                :horizontalFlip="true"
              ></Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr max-content 1fr 1fr;
  column-gap: 1rem;
  place-items: center;
  padding: 0 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  border-top: 1px solid rgba(140, 140, 140, 0.2);
}

.router-link-active {
  color: var(--blue);
}

.navlink {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
}

.help__inner {
  display: grid;
  place-items: center;

  width: 75px;
  height: 75px;
  border: 1px solid var(--grey);
  color: white;
  border-radius: 999px;
  background: linear-gradient(180deg, #18a0fb 0%, #9718fb 100%);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}

.help {
  padding: 8px;
  border-radius: 999px;
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.25);
  background-color: white;
  

  cursor: pointer;
}

nav .help {
  transform: translateY(-28px);
}

nav .navlink p {
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 600;
  font-size: 12px;
}

.topbar {
  display: grid;
  place-items: center;
  padding: 1rem 0;
  color: var(--blue);
  border-bottom: 1px solid rgba(140, 140, 140, 0.2);
}

.help-modal__wrapper {
  position: fixed;
  display: none;
  place-items: center stretch;

  background-color: rgba(0, 0, 0, 0.3);

  padding: 2rem 1rem;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.help-modal__wrapper.show {
  display: grid;
}

.help-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  min-height: 25rem;

  background-color: white;
  padding: 4rem 2rem;
  border-radius: 1rem;
}

.help-modal p {
  font-weight: 700;
}

.help-modal .close {
  position: absolute;
  color: var(--grey);

  top: 2rem;
  right: 2rem;
}

.help-types {
  display: flex;
  column-gap: 4rem;
  justify-content: center;
}

.help-types .help__inner {
  width: 90px;
  height: 90px;
}


</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
