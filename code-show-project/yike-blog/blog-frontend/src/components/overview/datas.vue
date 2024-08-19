<template>
  <!-- 上下结构 两张卡片 -->
  <yk-space dir="vertical" size="xl" style="width: 50%">
    <div class="data-card">
      <!-- 左右结构：标题、按钮组 -->
      <div class="data-card__title">
        <p class="data-card__title-name">访问量</p>
        <yk-radio-group
          v-model="visitsRadio"
          type="button"
          :solid="true"
          @change="getVisits"
        >
          <yk-radio value="week">近一周</yk-radio>
          <yk-radio value="moon">近一月</yk-radio>
        </yk-radio-group>
      </div>
      <!-- 折线图 -->
      <LineChart chart-height="208px" :data="visitsData" />
    </div>

    <div class="data-card">
      <div class="data-card__title">
        <!-- 左右结构：标题、按钮组 -->
        <p class="data-card__title-name">数据监测</p>
        <yk-radio-group v-model="surveyRadio" type="button" :solid="true">
          <yk-radio value="week">近一周</yk-radio>
          <yk-radio value="moon">近一月</yk-radio>
        </yk-radio-group>
      </div>
      <!-- 饼图 -->
      <div style="display: flex">
        <PieChart
          title="设备总数"
          chart-height="208px"
          :data="survey.data.device"
        />
        <PieChart
          title="访问总数"
          chart-height="208px"
          :data="survey.data.website"
        />
      </div>
    </div>
  </yk-space>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { LineChart, PieChart } from "../echarts/index";
import { visits, survey } from "../../mock/index";

// 选项：近一周 近一月
const visitsRadio = ref("week");
const surveyRadio = ref("moon");

// 数据：访问量 (动态获取)
const visitsData = ref([]);
const getVisits = (e: string) => {
  let data = visits.data;
  if (e == "week") {
    data = data.slice(0, 7);
  }
  visitsData.value = data;
};

// 挂载时获取数据
onMounted(() => {
  getVisits(visitsRadio.value);
});
</script>

<style scoped lang="less">
.data-card {
  padding: @space-xl;
  border-radius: @radius-m;
  background: @bg-color-l;
  width: 100%;
  padding-bottom: @space-l;

  &__title {
    display: flex; // 一行布局
    justify-content: space-between; // 两边分
    align-items: center; // 上下居中

    &-name {
      .font-l();
      font-weight: 600;
      color: font-color-l;
    }
  }
}
</style>
