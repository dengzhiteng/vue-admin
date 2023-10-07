<script setup lang="ts">
import TopNav from "./components/TopNav.vue"
import SlideMenu from "./components/SlideMenu.vue"
</script>

<template>
  <div class="common-layout">
    <top-nav />
    <el-container class="content">
      <el-aside width="200px">
        <slide-menu />
      </el-aside>
      <el-main>
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
