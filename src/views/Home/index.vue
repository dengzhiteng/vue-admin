<script setup >
// import Banner from "./components/Banner.vue";
import { getUsers } from '@/apis/home.js'
import { onMounted } from 'vue'

onMounted(async () => {
  const res2 = await getUsers()
  console.log(res2);
})

</script>
<template>
  <!-- <Banner /> -->
  <div class="box"></div>
  <router-link to="/demo">记住滚动行为</router-link>
</template>
<style scoped lang="scss">
.box {
  height: 1000px;
}
</style>

