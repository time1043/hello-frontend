<template>
  <div class="head-bar">
    <!-- 左边：logo、标题名称 -->
    <yk-space
      align="center"
      :size="12"
      style="cursor: pointer"
      @click="backHome"
    >
      <img src="../../assets/vue.svg" class="logo" />
      <span class="name">Blog oswin</span>
    </yk-space>

    <!-- 右边：邮箱、头像、深浅切换、退出按钮 -->
    <yk-space align="center" size="xl">
      <!-- 邮箱 数据展示的徽标 -->
      <yk-badge is-dot>
        <IconEmailFill style="font-size: 20px" />
      </yk-badge>
      <!-- 头像 数据展示 -->
      <yk-avatar
        img-url="https://www.huohuo90.com:3003/user/6353b034dd4b583975e77fbe.png"
      ></yk-avatar>
      <!-- 深浅切换 暗黑模式 -->
      <div><yk-theme /></div>
      <!-- 退出按钮 -->
      <yk-button>退出</yk-button>
    </yk-space>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
// 返回总览页面
const backHome = () => {
  router.push("/");
};
</script>

<style scoped lang="less">
.head-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: @bg-color-l;
  z-index: 10;
  display: flex; // 一行布局
  justify-content: space-between; // 两边分
  align-items: center; // 上下居中
  padding: 0 @space-xl;

  .logo {
    height: 38px;
  }
  .name {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
