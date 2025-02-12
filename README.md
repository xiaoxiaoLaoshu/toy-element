# 我们这次的组件库项目每个组件的目录大致结构如下,简单统一规范一下
- Xxx.test.tsx 测试文件
- Xxx.vue 组件文件
- types.ts 属性文件
- style.css 样式文件
- index.ts 对外访问文件
- constants.ts 常量文件

## 目录结构说明
- packages
  - components 组件库
    - components 
    - index.ts 对外访问文件
    - vitest.config.ts vite 配置文件
  - core 核心库，对外访问接口？
  - docs 文档库，项目的文档介绍和说明，生产静态页面对外访问
  - hooks 
  - play 演示场，演示组件的效果
  - theme 主题文件库
  - utils 公共函数库

 ## 启动项目


 ### 困惑点
 1. 不同分包之间如何引用和启动的
  - play 如何引用到 components 的组件 ？
    play 是通过引入第三方包来引用到 components 的组件，所以是通过 package.json 指定包名安装依赖引入，但是在 play 的 package.json 中没有引入的包名，而在主项目的 package.json 中有包名，因此是共享主项目的依赖来引入 components 的组件。

