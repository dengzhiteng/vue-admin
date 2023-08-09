<script setup lang="ts">
import { getBannerAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
let bannerList: any = []
onMounted(async () => {
  const res = await getBannerAPI()
  bannerList = res.result
})
</script>

<template>
  <div class="home-banner container">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" :lazy="true" />
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
