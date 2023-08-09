<script setup lang="ts">
import Banner from "./components/Banner.vue"
import { getUserInfo } from "@/apis/home"
import { onMounted } from "vue"

onMounted(async () => {
  const res = await getUserInfo()
})
</script>
<template>
  <Banner />
  <div class="box"></div>
  <router-link to="/demo">记住滚动行为</router-link>
</template>
<style scoped lang="scss">
.box {
  height: 1000px;
}
</style>
