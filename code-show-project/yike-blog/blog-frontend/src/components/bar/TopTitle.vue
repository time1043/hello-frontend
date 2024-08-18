<template>
  <div class="top-title">
    <!-- 标题 -->
    <yk-title :level="3" style="margin: 0; line-height: 36px">{{
      props.name
    }}</yk-title>
    <!-- 搜索栏(可关闭) 取消按钮(输入后) v-if v-show-->
    <slot name="custom" />
    <yk-space size="m" v-if="isSearch">
      <yk-button type="secondary" v-show="SearchData" @click="cancelSearch"
        >取消搜索</yk-button
      >
      <yk-input-search
        style="width: 320px"
        placeholder="请输入..."
        v-model="SearchData"
        @search="search"
      >
        <template #suffix>
          <yk-button type="secondary"><IconSearchOutline /></yk-button>
        </template>
      </yk-input-search>
    </yk-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 标题字样 搜索栏 (父子组件通信prop)
type titleProps = {
  name: string;
  isSearch: boolean;
};
const props = withDefaults(defineProps<titleProps>(), {
  name: "总览",
  isSearch: true, // 默认有搜索栏
});

// 取消按钮(输入后才出现)
const SearchData = ref();

// 搜索数据
const emit = defineEmits(["search"]);
// 搜索事件 搜索数据交给父组件
const search = () => {
  emit("search", SearchData.value);
};
// 取消搜索事件
const cancelSearch = () => {
  emit("search", "");
  SearchData.value = "";
};
</script>

<style scoped lang="less">
.top-title {
  display: flex; // 一行布局
  align-items: center; // 上下居中
  justify-content: space-between; // 两边分
}
</style>
