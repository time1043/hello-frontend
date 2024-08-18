<template>
  <!-- space 竖排 -->
  <yk-space dir="vertical" class="menu-bar" size="m">
    <!-- 路由跳转 v-for -->
    <router-link
      :to="item.path"
      v-for="item in navLinks"
      :key="item.path"
      class="menu-bar__nav"
    >
      <yk-space align="center" size="m">
        <component :is="item.icon" />
        <yk-text>{{ item.name }}</yk-text>
      </yk-space>
    </router-link>
  </yk-space>
</template>

<script setup lang="ts">
import { navLinks } from "../../utils/menu";
</script>

<style scoped lang="less">
.menu-bar {
  padding: @space-l;
  position: fixed;
  top: 72px;
  left: 8px;

  &__nav {
    width: 160px;
    height: 40px;
    border-radius: @radius-m;
    padding: 0 @space-l;
    display: flex;
    align-items: center; // 上下居中
    text-decoration: none; // 去掉下划线

    .yk-icon {
      color: @font-color-ss;
      width: 16px;
      height: 16px;
    }

    &:hover {
      // 鼠标悬停
      background: @bg-color-l; // 背景显色
      .yk-text {
        font-weight: 600; // 聚焦字体加粗
      }
    }
  }
  .router-link-active {
    // 被选中
    background: linear-gradient(180deg, #2b5aedde 0%, #2b5aed 100%);
    .yk-icon {
      color: @bg-color-l;
    }
    .yk-text {
      color: @bg-color-l;
      font-weight: 600; // 聚焦字体加粗
    }
  }
}
</style>
