<script setup>
import Banner from "./components/Banner.vue";
</script>
<template>
  <Banner />
  <div class="box">1</div>
  <router-link to="/demo">记住滚动行为</router-link>
</template>
<style scoped lang="scss">
.box {
  height: 1000px;
}
</style>

