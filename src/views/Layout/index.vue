<script setup lang="ts">
import HeaderBar from "./components/header/index.vue"
import SlideBar from "./components/SlideBar.vue"
import TabsBar from "./components/TabsBar.vue"
</script>

<template>
  <div class="common-layout">
    <header-bar />
    <el-container class="content">
      <el-aside width="200px">
        <slide-bar />
      </el-aside>
      <el-main>
        <tabs-bar />
        <router-view />
      </el-main>
    </el-container>
    <app-footer />
  </div>
</template>

<style scoped lang="scss">
.content {
  min-height: calc(100vh - 50px);
  background-color: #f1f1f1;
}
</style>
