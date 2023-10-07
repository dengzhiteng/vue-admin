<script setup lang="ts">
import { Menu as IconMenu, Promotion, DataAnalysis } from "@element-plus/icons-vue"
import { useRouter, useRoute } from "vue-router"
const isCollapse = ref(false)
const activeIndex = ref("2")

const router = useRouter()
const route = useRoute()
console.log(router.getRoutes())
</script>
<template>
  <div class="menu">
    <el-menu
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#333"
      text-color="#fff"
      :default-active="activeIndex"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><DataAnalysis /></el-icon>
          <span>仪表盘</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">工作台</el-menu-item>
          <el-menu-item index="1-2">分析</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>功能</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">下载</el-menu-item>
          <el-menu-item index="2-2">预览PDF</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<style lang="scss">
.menu {
  color: #fff;
  background: #000;
  height: calc(100vh - 50px);
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 50px);
}
</style>
