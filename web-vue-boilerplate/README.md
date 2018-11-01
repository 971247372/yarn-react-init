# LEAN-BI-VUE

### 项目介绍
基于 Vue.js 的前端项目模板

#### 技术选型
1. [yarn](https://yarnpkg.com/)
1. [lerna](https://lernajs.io/)
1. [@vue/cli](https://cli.vuejs.org/)
1. [docker](https://www.docker.com/)
1. [eslint](https://eslint.org/)
1. [prettier](https://prettier.io/)
1. [vue](https://cn.vuejs.org/)
1. [vue-router](https://router.vuejs.org/)
1. [axios](https://github.com/axios/axios)
1. [sass](https://sass-lang.com/)
1. [iview](https://www.iviewui.com/)
1. [lodash](https://lodash.com/)

### 安装教程
1. yarn run bootstrap

### 开发
1. yarn run dev
1. 组件页面 http://localhost:8080/components

### 新增依赖
```
lerna add xxx --scope app-admin
```

### 项目初始化需要修改的地方
1. package.json -> name (项目名称)
1. build/build.sh -> DOCKER_TAG (项目名称)
1. packages/app-admin/src/assets/logo.svg -> logo
1. packages/app-admin/src/App.vue -> title (浏览器标签上显示的标题)
1. packages/app-admin/src/views/Signin.vue -> product (标题), company (公司)
1. packages/app-admin/src/views/Layout.vue -> product (标题)
1. packages/app-admin/public/index.html -> title (浏览器标签上默认显示的标题)
1. packages/app-admin/public/favicon.ico -> 浏览器标签ICON
1. packages/app-admin/vue.config.js -> devServer (api 地址)

### 项目打包
1. 执行脚本 `build/build.sh`

### 项目发布
1. 执行脚本(待添加)
