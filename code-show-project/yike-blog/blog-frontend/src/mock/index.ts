import Mock from "mockjs";

// #################################################
// 总览数据
// /overview
// #################################################

// 随机数 浮点数
const Random = Mock.Random;

export const overview = Mock.mock({
  code: 200,
  data: {
    file: Random.float(60, 100, 2, 2) + "M",
    "article|0-50": 0,
    "gallery|0-50": 0,
    "diary|0-50": 0,
  },
});

// #################################################
// 访问量
// /visits
// #################################################

export const visits = Mock.mock({
  code: 200,
  "data|30": [
    {
      date: "@datetime('MM-dd')",
      "count|10-100": 12,
    },
  ],
});

// #################################################
// 数据监测
// /survey
// #################################################

export const survey = Mock.mock({
  code: 200,
  data: {
    device: [
      {
        key: "mobile",
        name: "移动端",
        "value|30-120": 50,
      },
      {
        key: "pc",
        name: "PC端",
        "value|30-120": 40,
      },
    ],
    website: [
      {
        key: "file",
        name: "文件",
        "value|30-120": 50,
      },
      {
        key: "article",
        name: "文章",
        "value|30-120": 50,
      },
      {
        key: "gallery",
        name: "图库",
        "value|30-120": 50,
      },
      {
        key: "diary",
        name: "日记",
        "value|30-120": 50,
      },
    ],
  },
});
