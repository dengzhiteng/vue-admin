<script setup lang="ts">
import {getBanner} from "@/apis/home"
interface Ibanner {
  bannerList: any[]
}
const state: Ibanner = reactive({
  bannerList: []
})
onMounted(async () => {
  const res = await getBanner()
  state.bannerList = res.data
})
</script>

<template>
  <div class="home-banner container">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in state.bannerList">
        <img :src="item.imgUrl" :key="item.id" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  img {
    width: 100%;
  }
}
</style>
