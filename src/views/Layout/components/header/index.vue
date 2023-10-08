<script lang="ts" setup>
import avatar from "@/assets/images/avatar.jpg"
import { ArrowDown } from "@element-plus/icons-vue"
import { useLoginOutStore } from "@/store/user"
const { loginOut } = useLoginOutStore()

const onCommand = (command: string) => {
  if (command === "loginout") {
    loginOut()
  }
}
</script>
<template>
  <div class="header-bar flex justify-between text-white">
    <div>mocha Vue3 Admin</div>
    <div>center</div>
    <div class="right">
      <el-avatar class="mb-2" :size="30" :src="avatar" />
      <el-dropdown class="ml-2" trigger="click" @command="onCommand">
        <span class="flex items-center cursor-pointer">
          <el-icon class="el-icon--right">
            <ArrowDown color="#fff" />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="user">个人中心</el-dropdown-item>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-bar {
  height: 50px;
  line-height: 50px;
  background: #000;
  padding: 0 10px;
}
.el-icon--right,
.right {
  padding-top: 10px;
}
</style>
