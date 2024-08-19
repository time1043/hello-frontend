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
import { PieChart } from "echarts/charts";
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
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);

// 父子组件数据传递
const props = defineProps(["data", "title", "chartHeight"]);
// 获取html元素
const chart = ref<HTMLDivElement>();
// 初始化数据
let myChart = ref();
const option = ref();

// 武装数据
const survey = (e: any) => {
  // 饼图中心：总数计算
  let total: number = 0;
  for (let i = 0; i < e.length; i++) {
    total += e[i].value;
  }

  option.value = {
    // 饼图的环颜色
    color: ["#2B5AED", "#FA5247", "#1ccbb6", "#F625AF", "#FFB435"],
    // 饼图中心：主标题 副标题
    title: {
      text: total, // 主标题文本
      subtext: props.title, // 副标题文本
      left: "center",
      top: "34%",
      textStyle: {
        fontSize: 32,
        color: "#686B73",
        algin: "center",
      },
      subtextStyle: {
        fontSize: 14,
        color: "#686B73",
      },
    },

    // 提示框
    tooltip: {
      trigger: "item",
    },
    // 图例
    legend: {
      show: false,
      // orient: "vertical",
      bottom: 0,
      // right: 0,
      icon: "circle",
    },

    series: [
      {
        // name: "设备总数",
        type: "pie",
        radius: ["60%", "76%"],
        avoidLabelOverlap: true,

        label: {
          normal: {
            show: true, // 默认显示关闭 若为true则数据重叠
          },
          emhasis: {
            show: true,
          },
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: e,
      },
    ],
  };
};
survey(props.data);

// 挂载 实时变化
onMounted(() => {
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
    survey(n);
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
