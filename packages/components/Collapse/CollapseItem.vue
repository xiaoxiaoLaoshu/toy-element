<template>
  <div class="er-collapse-item" :class="{ 'is-disabled': disabled}">
    <div class="er-collapse-header" :class="{ 'is-disabled': disabled, 'is-active': isActive}"
    :id="`item-header-${name}`" @click="handleClick">
      <slot name="title">{{ title }}</slot>
      <er-icon icon="arrow-down" class="header-angle" />
    </div>
    <div class="er-collapse-item__wapper" v-show="isActive">
        <div class="er-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { type CollapseItemProps, collapseCtxKey } from './types';
import { ErIcon } from '../Icon';

defineOptions({
    name: 'ErCollapseItem'
})

const props = defineProps<CollapseItemProps>();

const ctx = inject(collapseCtxKey);

const isActive = computed(() => {
    return ctx?.activeNames.value.includes(props.name);
})

const handleClick = () => {
  ctx?.handleItemClick(props.name);
}
</script>

<style scoped>
@import './style.css'
</style>