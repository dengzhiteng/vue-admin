<script lang="ts" setup>
import AA from "./components/AA.vue"
import BB from "./components/BB.vue"
const tabs = [
  {
    component: AA,
    index: 0,
    title: "基础1"
  },
  {
    component: BB,
    index: 1,
    title: "基础2"
  }
]
const activeIndex = ref(0)
const switchTab = (index: number) => {
  activeIndex.value = index
}
</script>
<template>
  <div class="tabs">
    <el-button :class="{active: index == activeIndex}" v-for="(item, index) in tabs" :key="index" @click="switchTab(index)">{{
      item.title
    }}</el-button>
  </div>
  <div class="box">
    <keep-alive>
      <component :is="tabs[activeIndex]['component']"></component>
    </keep-alive>
  </div>
</template>
<style scoped lang="scss">
.active {
  background-color: pink;
  color: #fff;
}
</style>
