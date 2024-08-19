<template>
  <yk-space dir="vertical" size="xl">
    <!-- 上下结构：标题、总览卡片 -->
    <top-title :is-search="false" />
    <gather />
    <!-- 左右结构：数据统计卡片、评论卡片 -->
    <yk-space style="width: 100%">
      <datas />
      <div class="report" style="background-color: #fff; height: 30px">
        评论
      </div>
    </yk-space>
  </yk-space>
</template>

<script setup lang="ts">
import TopTitle from "../components/bar/TopTitle.vue";
import gather from "../components/overview/gather.vue";
import datas from "../components/overview/datas.vue";
</script>

<style scoped lang="less"></style>
