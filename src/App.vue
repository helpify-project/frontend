<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
<div class="layout">
  <RouterView>
  </RouterView>
  <nav>
    <RouterLink :to="{ name: 'home' }">
      <div class="navlink">
        <img src="@/assets/home.svg">
        <p>Home</p>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'videos' }">
      <div class="navlink">
        <img src="@/assets/video.svg">
        <p>Videos</p>
      </div>
    </RouterLink>
    <div class="help">
      <div class="help__inner">
        <img src="@/assets/phone.svg">
      </div>
    </div>
    <RouterLink :to="{ name: 'map' }">
      <div class="navlink">
        <img src="@/assets/map.svg">
        <p>Map</p>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'directory' }">
      <div class="navlink">
        <img src="@/assets/contact.svg">
        <p>Contacts</p>
      </div>
    </RouterLink>
  </nav>
</div>
</template>

<style scoped>
nav {
  display: grid;
  grid-template-columns: 1fr 1fr max-content 1fr 1fr;
  column-gap: 1rem;
  place-items: center;
  padding: 0 2rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;

  box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.2);
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
  border-radius: 999px;
  background: linear-gradient(180deg, #18A0FB 0%, #9718FB 100%);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}

.help {
  padding: 8px;
  border-radius: 999px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
  background-color: white;
  transform: translateY(-28px);

  cursor: pointer;
}

nav .navlink p {
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 600;
  font-size: 12px;
}

</style>
