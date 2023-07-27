<template>
  <div class="app-footer">
    <div class="contact"></div>
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="#">
            <i class="iconfont icon-jiage"></i>
            <span>价格亲民</span>
          </a>
          <a href="#">
            <i class="iconfont icon-yunshu"></i>
            <span>物流快捷</span>
          </a>
          <a href="#">
            <i class="iconfont icon-dianzan"></i>
            <span> 品质新鲜</span>
          </a>
        </div>

        <div class="copyright">
          <p>
            <a href="#">关于我们</a>
            <a href="#">帮助中心</a>
            <a href="#">售后服务</a>
            <a href="#">配送与验收</a>
            <a href="#">商务合作</a>
            <a href="#">搜索推荐</a>
            <a href="#">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.app-footer {
  .extra {
    background-color: #333;

    .slogan {
      line-height: 58px;
      padding: 60px 100px;
      border-bottom: 1px solid #434343;
      display: flex;
      justify-content: space-between;

      a {
        height: 58px;
        line-height: 58px;
        color: #fff;
        font-size: 28px;

        i {
          font-size: 50px;
          vertical-align: middle;
          margin-right: 10px;
          font-weight: 100;
        }

        span {
          vertical-align: middle;
          text-shadow: 0 0 1px #333;
        }
      }
    }

    .copyright {
      height: 170px;
      padding-top: 40px;
      text-align: center;
      font-size: 15px;
      color: #999;

      p {
        margin-bottom: 20px;

        a {
          color: #999;
          padding: 0 10px;
          border-right: 1px solid #999;
        }
      }
    }
  }
}
</style>