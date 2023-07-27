<template>
  <div class="app-topnav">
    <div class="container">
      <ul>
        <li><a href="#">请先登录</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">关于我们</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.app-topnav {
  height: 50px;
  line-height: 50px;
  background: #333;

  ul {
    display: flex;
    justify-content: end;

    li {}
  }

  a {
    padding: 0 15px;
    color: #cdcdcd;

    &:hover {
      color: #2cad9b;
    }
  }
}
</style>