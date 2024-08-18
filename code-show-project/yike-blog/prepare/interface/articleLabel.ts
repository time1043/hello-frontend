// #################################################
// 标签管理
// /label
// #################################################

// 请求
export type label = {
  token: string;
};

// 响应
type labelRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: [
    {
      id: number;
      name: string | number;
      moment: string;
    }
  ];
};

// #################################################
// 新建标签
// /addLabel
// #################################################

// 请求
export type addLabel = {
  token: string;
  labelName: string | number;
};

// 响应
type addLabelRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 删除标签
// /deleteLabel
// #################################################

// 请求
export type deleteLabel = {
  token: string;
  labelId: number;
};

// 响应
type deleteLabelRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};
