// #################################################
// 用户登陆
// /signin
// #################################################

// 请求
export type signin = {
  name: string;
  psw: string;
  address: string; // 请求地址
};

// 响应
type signinRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    id: number;
    name: string;
    imgurl: string; // 后端拼接好
    token: string;
    sex: number;
  };
};

// #################################################
// 总览数据
// /overview
// #################################################

// 请求
export type overview = {
  token: string; // 总览不需要携带过多参数 鉴权即可
  userId: string; // 根据不同角色取不同数据
};

// 响应
type overviewRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    file: string | number; // 本地文件 磁盘大小
    article: number; // 博客文章 文章数量
    gallery: number; // 摄影图库 图片数量
    diary: number; // 随笔随记 随记数量
  };
};

// #################################################
// 访问量
// /visits
// #################################################

// 请求
export type visits = {
  token: string;
  length: number; // 时间长度 数据切换
};

// 响应
type visitsRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    list: [
      {
        date: string; //日期
        count: number; // 访问量
      }
    ];
  };
};

// #################################################
// 数据监测
// /survey
// #################################################

// 请求
export type survey = {
  token: string;
  length: number; // 时间长度 数据切换
};

// 响应
type surveyRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    device: {
      key: "mobile" | "pc"; // 设备类型
      value: number;
    }[];
    website: {
      key: "file" | "article" | "gallery" | "diary"; // 访问子页面
      value: number;
    }[];
  };
};

// #################################################
// 评论 (分页查询)
// /comment
// #################################################

// 请求
export type comment = {
  token: string;
  nowPage: number; // 当前页码
  pageSize: number; // 每页数量
  count?: boolean; // 是否获取评论总数量
};

// 响应
type commentRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    list: [
      {
        id: number;
        article?: {
          id: number;
          title: string;
        };
        user: {
          id: string | number; // 游客string 登陆用户number
          name: string;
          imgurl: string;
        };
        comment: string; // 内容
        moment: string; // 时间
        complaint: number; // 举报数
      }
    ];
    count?: number; // 评论总数量
  };
};

// #################################################
// 私信
// /message
// #################################################

// 请求
export type message = {
  token: string;
  nowPage: number; // 当前页码
  pageSize: number; // 每页数量
  count?: boolean; // 是否获取私信总数量
};

// 响应
type messageRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    list: [
      {
        id: number;
        user: {
          id: string | number; // 游客string 登陆用户number
          name: string;
        };
        message: string; // 内容
        moment: string; // 时间
      }
    ];
  };
};
