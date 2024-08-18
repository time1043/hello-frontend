// #################################################
// 随笔列表及随笔搜索
// /diary
// #################################################

// 请求
export type diary = {
  token: string;
  nowPage: number; // 当前页码
  pageSize: number; // 每页数量
  serchTerm?: string | number; // 搜索关键词 (为空则文章列表)
  count?: boolean; // 是否获取文章总数量
};

// 响应
type diaryRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    count?: number; // 总数量
    list: [
      {
        id: number; // 文章id
        title: string; // 文章标题
        moment: string; // 创建时间
        wealtherId: number; // 天气id
        content: string; // 文字内容
        picture?: string[]; // 图片地址
      }
    ];
  };
};

// #################################################
// 随笔删除
// /deleteDiary
// #################################################

// 请求
export type deleteDiary = {
  token: string;
  diaryId: number; // 随笔id
};

// 响应
type deleteDiaryRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 随笔新建 (没有修改)
// /createDiary
// #################################################

// 请求
export type createDiary = {
  token: string;
  title: string; // 文章标题
  wealtherId: number; // 天气id
  content: string; // 文字内容
  picture?: string[]; // 图片地址
};

// 响应
type createDiaryRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 天气获取
// /wealther
// #################################################

// 请求
export type wealther = {
  token: string;
};

// 响应
type wealtherRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    list: [
      {
        id: number; // 天气id
        name: string; // 天气名称
        icon: string; // 天气图标
      }
    ];
  };
};
