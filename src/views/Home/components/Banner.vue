<script setup>
import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

const bannerList = ref([])
const getBanner = async () => {
  const res = await getBannerAPI()
  console.log(res)
  bannerList.value = res.result
}
onMounted(() => getBanner())
</script>

<template>
  <div class="home-banner container">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  img {
    width: 100%;
  }
}
</style>