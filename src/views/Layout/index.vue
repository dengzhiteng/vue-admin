<template>
  <app-topnav />
  <app-header />
  <router-view />
  <!-- <app-footer /> -->
</template>

<script setup>
import AppTopnav from "./components/AppTopnav.vue"
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"
</script>
