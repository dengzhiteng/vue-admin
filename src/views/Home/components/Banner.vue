<script setup >
import { getBannerAPI } from '@/apis/home.js'
import { onMounted, ref } from 'vue'

const bannerList = ref([])
onMounted(async () => {
  const res = await getBannerAPI()
  bannerList.value = res.result
})

</script>

<template>
  <div class="home-banner container">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" :lazy=true>
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