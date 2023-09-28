<script setup lang="ts">
import AppTopnav from "./components/AppTopnav.vue"
import AppMenu from "./components/AppMenu.vue"
</script>

<template>
  <div class="common-layout">
    <app-topnav />
    <el-container class="content">
      <el-aside width="200px">
          <app-menu />
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
  min-height: calc(100vh - 50px - 23px);
  background-color: #f1f1f1;
}
</style>



