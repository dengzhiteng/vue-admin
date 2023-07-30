# Vue 3 + Vite +ts 学习项目

- 在 jsconfig.json 中设置路径提示,在 viete.config.js 中设置别名

## 20230629

- [node 升级](https://blog.csdn.net/m0_56745001/article/details/129381751)
  安装 element-plus 报一下错误： Unsupported URL Type: npm:@sxzz/popperjs-es@^2.11.7
  然后上网找原因：由于当前的 npm(v6.14.8)版本较低，要升级 npm，

```
npm install -g npm
```

- [npm 与 cnpm 版本不一致](https://blog.csdn.net/weixin_43221910/article/details/124892665)
- 使用 linux 创建目录结构
- 创建 vue3.0 模板

## 20230630

- [右击,使用 vscode 打开文件](https://blog.csdn.net/kinghzking/article/details/126185822)
- 完成路由搭建

1. 注意路由导入文件的时候一定要是完整的路径

```js
// 错误写法
import Home from "@/views/Home";
// 一直提示,[vite] Internal server error: EISDIR: illegal operation on a directory, read

// 正确写法
import Home from "@/views/Home/index.vue";
```

## 20230726

- 由 npm 改用 yarn,若要再次使用 npm 来管理项目,则删除 node_modules、yarn.lock 即可
- 引用 iconfont 直接先使用在线的 ,便于后续添加新的 iconfont
- vscode 要删除一个字母,再写一个字码才有 提示 ...怎么解决??

## 20230727

- 项目中使用 fetch

## 20230729

- 引入组件报错， VUE 报错：Already included file name 解决办法

1. 更换组件名

```
- vscode 登录账户 同步设置
- 动态路由，嵌套路由，路由传参
- 在 '/' 根路径的路由中不能起别用:(未解决)
- 登录页面

```

## 20230730

- 动态路由
- vscode 中代码提示问题
- 打包后页面资源加载 404
- 配置环境变量
- css 与系统环境风格配套
- 路由 记住滚动位置,如果没有生效，那么要注意是不是 html 的高度设置成了 100%
- 定义 css 变量
- color-scheme 和夜间模式
- [深色 ，浅色 两套主题](https://blog.csdn.net/duninet/article/details/104882324/)
