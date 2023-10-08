<script setup lang="ts">
const isCollapse = ref(false)
import { asyncRoutes } from "@/router/asyncRoutes"
import { useRoute } from "vue-router"
const route = useRoute()
</script>
<template>
  <div class="menu">
    <el-menu
      router
      unique-opened
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#333"
      text-color="#fff"
      :default-active="route.path"
    >
      <el-sub-menu v-for="route in asyncRoutes" :index="route.path">
        <template #title>
          <el-icon>
            <component :is="route.meta.icon" />
          </el-icon>
          <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item-group v-for="routeItem in route.children">
          <el-menu-item :index="routeItem.path">{{ routeItem.meta.title }}</el-menu-item>
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
