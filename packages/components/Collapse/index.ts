import ErCollapse from './Collapse.vue'
import ErCollapseItem from './CollapseItem.vue'
import type { App } from 'vue'

ErCollapse.install = (app: App) => {
  app.component(ErCollapse.name || 'ErCollapse', ErCollapse)
}

ErCollapseItem.install = (app: App) => {
  app.component(ErCollapseItem.name || 'ErCollapseItem', ErCollapseItem)
}

export { ErCollapse, ErCollapseItem }

export * from './types';