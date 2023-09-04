<script setup>
import {RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<template>      

  <div class="text-white flex md:flex-col min-h-screen sm:flex-row font-Roboto bg-weather-secondary color ">
    <SiteNavigation/>
    <RouterView />
  </div>
</template>
