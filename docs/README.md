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
