<template>
  <div class="index-view">
    <!-- 菜单 -->
    <menu-bar />
    <!-- 子路由 -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MenuBar from "../components/bar/MenuBar.vue";
</script>

<style scoped lang="less">
.index-view {
  padding: 32px 32px 32px 232px;
}
</style>
