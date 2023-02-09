<h1 style="text-align: center">Vue2 Template Admin</h1>

## 简介

Vue2 Template Admin 作为中后台模版，其采用`vue2`，`element-ui`等相关技术栈开发。内置二次封装的常规组件，提炼并抽象化常用模块，减轻`import`与`require`的使用，提升开发效率

## 特性

- 模块：高度抽象，尽量减少`import`和`require`使用
- 组件：二次封装多个常用组件

## 准备

本项目主要基于`ES2015+`，`vue2`，`vue-router`，`pinia`，`vue-cli@4.5.17`，`axios`及`ant design for vue`，故需要提前熟悉。

- node 和 git -项目开发环境
- 熟悉 vue2 基础语法
- 熟悉 webpack 特性，不限于（webpackDLL、ProvidePlugin、plugin alias）等
- 由于项目针对典型模块如`auth`，`utils`等高度抽象，需要预先查阅 vue.config.js 文件

## 安装及使用

```
- 拉取项目
git clone https://github.com/Octoveau/vue2-template-portal.git

- 进入项目
cd vue2-template-portal

- 安装依赖
npm install

- 启动
npm run serve
```

## 其它

```
- 预打包【将ant design for vue、moment、lodash进行预打包提高编译速度】
npm run dll
```

## commit 时的标题，后面必须代一个空格

- build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
- docs：文档更新
- feat：新增功能
- fix：bug 修复
- perf：性能优化
- refactor：重构代码(既没有新增功能，也没有修复 bug)
- style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
- test：新增测试用例或是更新现有测试
