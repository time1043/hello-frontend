<template>
  <div ref="chart" :style="{ height: chartHeight }" class="chart"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, markRaw, watch } from "vue";
// 引入echarts核心
import * as echarts from "echarts/core";
// 引入提示框 标题 直角坐标系 数据集 内置数据转换器组件
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
// 引入折线图 饼图
import { LineChart } from "echarts/charts";
// 引入标签自动布局 全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入canvas渲染器 或SVGRenderer  must!!
import { CanvasRenderer } from "echarts/renderers";

// 注册组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

// 父子组件数据传递
const props = defineProps(["data", "chartHeight"]);
// 获取html元素
const chart = ref<HTMLDivElement>();
// 初始化数据
let myChart = ref();
const xAixisD = ref<string[]>([]);
const seriesD = ref<number[]>([]);
const option = ref();

// 武装数据
const visit = (e: any) => {
  xAixisD.value = [];
  seriesD.value = [];
  for (let i = 0; i < e.length; i++) {
    xAixisD.value.push(e[i].date); // x数据
    seriesD.value.push(e[i].count); // y数据
  }
  option.value = {
    color: ["#2B5AED"],
    grid: {
      top: "4%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xAixisD.value,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: seriesD.value,
        type: "line",
        smooth: true,
      },
    ],
  };
};

// 挂载 实时变化
onMounted(() => {
  visit(props.data);

  myChart.value = markRaw(echarts.init(chart.value as HTMLDivElement));
  myChart.value.setOption(option.value);

  // 监听页面视图变化echarts图的宽度
  window.addEventListener("resize", () => {
    myChart.value.resize();
  });
});
watch(
  () => props.data,
  (n) => {
    visit(n);
    myChart.value = markRaw(echarts.init(chart.value as HTMLDivElement));
    myChart.value.setOption(option.value);
  }
);

// 组件销毁前must取消监听事件 否则影响性能和占用内存
onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    myChart.value.resize();
  });
});
</script>

<style scoped lang="less">
.chart {
  width: 100%;
}
</style>
