<template>
  <div class="app-topnav">
    <ul class="flex justify-end">
      <li><a href="#">帮助中心</a></li>
      <li><a href="#">关于我们</a></li>
      <li><router-link to="/login">请先登录</router-link></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.app-topnav {
  height: 50px;
  line-height: 50px;
  background: #333;
  a {
    padding: 0 15px;
    color: #fff;
    &:hover {
      color: #2cad9b;
    }
  }
}
</style>
