<h1 style="text-align: center">Vue2 Template Admin</h1>

## 简介
Vue2 Template Admin作为中后台模版，其采用`vue2`，`element-ui`等相关技术栈开发。内置二次封装的常规组件，提炼并抽象化常用模块，减轻`import`与`require`的使用，提升开发效率

## 特性
- 模块：高度抽象，尽量减少`import`和`require`使用
- 组件：二次封装多个常用组件

## 准备
本项目主要基于`ES2015+`，`vue2`，`vue-router`，`vuex`，`vue-cli@4.5.17`，`axios`及`element-ui`，故需要提前熟悉。

- node 和 git -项目开发环境
- 熟悉vue2基础语法
- 熟悉webpack特性，不限于（webpackDLL、ProvidePlugin、plugin alias）等
- 由于项目针对典型模块如`auth`，`utils`等高度抽象，需要预先查阅vue.config.js文件

## 安装及使用
```
- 拉取项目
git clone https://github.com/Octoveau/vue2-admin-template.git

- 进入项目
cd vue2-admin-template

- 安装依赖
npm install

- 启动
npm run serve
```

## 其它
```
- 预打包【将element-ui、moment、lodash进行预打包提高编译速度】
npm run dll
```