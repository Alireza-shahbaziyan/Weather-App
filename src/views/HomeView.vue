<template>
  <main class="container text-weather-white">
    <div class="relative pt-4 mb-8">
      <input type="text" placeholder="search for a city or state"
      v-model="searchQuery"
      class="py-2 px-1 w-full bg-weather-secondary border-b
         focus:border-weather-primary focus:outline-none
          focus:shadow-[0px_1px_0_0_#004E71] ">
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from axios

const searchQuery = ref("")
</script>