<script lang="ts" setup>
import AA from "./components/AA.vue"
import BB from "./components/BB.vue"
import CC from "./components/CC.vue"
import DD from "./components/DD.vue"
import EE from "./components/EE.vue"

const tabs = [
  {
    component: AA,
    title: "基本语法"
  },
  {
    component: BB,
    title: "组件通讯"
  },
  {
    component: CC,
    title: "To Do List"
  },
  {
    component: DD,
    title: "骨架屏"
  },
  {
    component: EE,
    title: "指令"
  }
]
const activeIndex = ref(4)
const switchTab = (index: number) => {
  activeIndex.value = index
}

provide("fatherData", {activeIndex: activeIndex.value})
const changeStateFormBB = (val: any): void => {
  console.log(`接受到了来自组件BB的值` + val)
}
</script>
<template>
  <div class="tabs">
    <el-button
      :class="{active: index == activeIndex}"
      v-for="(item, index) in tabs"
      :key="index"
      @click="switchTab(index)"
    >
      {{ item.title }}</el-button
    >
  </div>
  <div class="box">
    <keep-alive>
      <component
        :is="tabs[activeIndex]['component']"
        :title="tabs[activeIndex]['title']"
        @changeStateFormBB="changeStateFormBB"
      ></component>
    </keep-alive>
  </div>
</template>
<style scoped lang="scss">
.active {
  background-color: #337ecc;
  color: #fff;
}
.tabs {
  padding: 10px;
}
.box {
  padding: 10px;
}
</style>
