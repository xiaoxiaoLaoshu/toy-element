底层使用 fortawesome 的图标，所以要引入 fortawesome 的包
依赖安装到那里呢，是根项目，还是组件库里？
作者的做法是安装到根项目上。询问 chatGpt 后，得知是为了共享依赖。

安装操作，命令行界面切换到根目录 `pnpm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome -wd` 

组件内部怎么处理自定义属性和过滤属性

i 标签的 v-bind="$attrs" 这是什么用法？
传递非 props 的属性，等同于 React 的使用剩余参数来传递非 props 的属性
