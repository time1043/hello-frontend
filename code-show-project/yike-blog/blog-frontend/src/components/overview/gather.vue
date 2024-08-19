<template>
  <yk-space class="gather">
    <div
      v-for="(item, index) in gathers"
      :key="index"
      class="gather__list"
      :style="{
        background: 'linear-gradient(' + item.bgColor + ')',
      }"
    >
      <!-- 四个小卡片 每个卡片内部是左右结构 左边是文字和数字 -->
      <yk-space dir="vertical" size="s">
        <yk-text type="secondary">{{ item.name }}</yk-text>
        <yk-title :level="2" style="margin: 0">{{ item.total }}</yk-title>
      </yk-space>
      <!-- 右边是按钮 排除第0个 加号正方形次要按钮 -->
      <yk-button v-if="index > 0" size="xl" type="secondary" shape="square">
        <IconPlusOutline />
      </yk-button>
    </div>
  </yk-space>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { overLink } from "../../utils/menu";
import { overview } from "../../mock";

// 把静态数据变动态
const gathers = ref(overLink);

// 获取mock数据
const drawGatherData = () => {
  let data = overview.data;
  gathers.value[0].total = data.file;
  gathers.value[1].total = data.article;
  gathers.value[2].total = data.gallery;
  gathers.value[3].total = data.diary;
};
// 挂载后获取数据
onMounted(() => {
  drawGatherData();
});
</script>

<style scoped lang="less">
.gather {
  width: 100%;

  &__list {
    width: 25%;
    background: #eee;
    display: flex; // 一行布局
    justify-content: space-between; // 两边分
    align-items: center; // 上下居中
    padding: @space-xl;
    border-radius: @radius-m;

    &:first-child {
      .yk-title,
      .yk-text {
        color: @white;
      }
    }
  }
}
</style>
