<script setup lang="ts"></script>

<template>
  <div class="app-header">
    <div class="container">
      <h1 class="logo">
        <a href="#">小兔鲜</a>
      </h1>
      <ul class="app-header-nav">
        <li><router-link to="/goodsList">列表数据</router-link></li>
      </ul>
      <div class="app-header-search">搜一搜</div>
      <div class="cart">
        <i class="iconfont icon-cart"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        //  background: url("/src/assets/images/logo.png") no-repeat center 18px / contain;
      }
    }

    ul {
      flex: 1;
      display: flex;
      padding-left: 40px;
      li {
        text-align: center;
        margin-right: 30px;
        a {
          color: #333;
          font-size: 16px;
          line-height: 32px;
          height: 32px;
          display: inline-block;
        }
      }
    }
    .app-header-search {
      width: 200px;
    }
  }
}
</style>
