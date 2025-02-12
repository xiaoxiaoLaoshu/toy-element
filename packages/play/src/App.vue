<script setup lang="ts">
</script>

<template>
  <er-button type="primary" name="button">Primary</er-button>
  <er-button type="primary" name="button" disabled>disabled</er-button>
  <er-button type="success" name="button">disabled</er-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
