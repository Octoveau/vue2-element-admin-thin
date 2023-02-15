<h1 style="text-align: center">Vue2 Template Admin</h1>

[README IN Chinese](https://github.com/Octoveau/vue2-element-admin-thin/blob/main/README.md)
## Introduction

Vue2 Template Admin as a middle-background template, which is developed with `vue2`, `element-ui` and other related technology stacks.   There are built-in secondary-encapsulates frequently-use components.   Refine and abstract frequently-use modules, reduce the use of `import` and `require`, improve development efficiency

## Features

- Module: Highly abstract, minimize the use of `import` and `require`
- Component: Secondary-encapsulate for multiple frequently-use componen

## Preparation

This project is mainly based on `ES2015+`, `vue2`, `Vue-router`, `pinia`, `vue-cli@4.5.17`, `axios` and` ant design for vue `, you need to be familiar with in advance.

- node and git - Project development environment
- be acquainted with vue2 essentials syntax
- be acquainted with webpack features, not limited to (webpackDLL, ProvidePlugin, plugin alias), etc
- Since the project is highly abstract against typical modules such as` auth `, `utils`, etc., you need to consult the vue.config.js file beforehand

## Installation and use

```
- Pull project
git clone https://github.com/Octoveau/vue2-template-portal.git

- Into the project
cd vue2-template-portal

- Installation dependency
npm install

- Start
npm run serve
```

## Others
```
- Prepack [Prepack 'ant design for vue', 'moment', and 'lodash' to improve compilation speed]
npm run dll
```


## commit title must followed by a space character

- build: The submission is mainly about modify the building system of the project (e.g. glup, webpack, rollup configuration, etc.)
- ci: The submission is mainly about modify the submission of the project continuing integration process (e.g. Travis, Jenkins, GitLab CI, Circle, etc.)
- docs: Updates the document
- feat: New function
- fix: Fixed bugs
- perf: performance optimization
- refactor: Refactor the code (neither new features nor bug fixes)
-style: Code modification that does not affect program logic (modify whitespace characters, completing missing semicolons, etc.)
- test: Add test case or update existing test