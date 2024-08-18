// #################################################
// 分组管理
// /subset
// #################################################

// 请求
export type subset = {
  token: string;
  classify: number; // 0文章 1摄影 2资源
};

// 响应
type subsetRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    count?: number; // 分组总数量
    list: [
      {
        id: number; // 对应删除等操作
        name: string;
        value: number; // 分组文章数量
        moment: number;
      }
    ];
  };
};

// #################################################
// 新建分组
// /addSubset
// #################################################

// 请求
export type addSubset = {
  token: string;
  subsetName: string | number;
  classify: number; // 0文章 1摄影 2资源
};

// 响应
type addSubsetRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 修改分组
// /updateSubset
// #################################################

// 请求
export type updateSubset = {
  token: string;
  subsetId: number;
  subsetName: string | number;
};

// 响应
type updateSubsetRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 删除分组
// /deleteSubset
// #################################################

// 请求
export type deleteSubset = {
  token: string;
  subsetId: number;
};

// 响应
type deleteSubsetRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};
