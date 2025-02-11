# 我们这次的组件库项目每个组件的目录大致结构如下,简单统一规范一下
- Xxx.test.tsx 测试文件
- Xxx.vue 组件文件
- types.ts 属性文件
- style.css 样式文件
- index.ts 对外导出文件
- * constants.ts 常量文件

## 目录说明
- packages
 - components 组件库
 - core 核心库，对外访问接口？
 - docs 文档库，项目的文档介绍和说明，生产静态页面对外访问
 - hooks 
 - play 演示场，演示组件的效果
 - theme 主题文件库
 - utils 公共函数库