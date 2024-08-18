// #################################################
// 文件
// /file
// #################################################

// 请求
export type file = {
  token: string;
  pageSize: number; // 每页数量
  nowPage: number; // 当前页码
  subsetId?: number; // 分组
  count?: boolean; // 是否获取总数量
};

// 响应
export type fileRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    count?: number; // 总数量
    list: [
      {
        id: number;
        url: string; // 地址
        fileName: string;
        format: string; // 格式
        subsetId?: number; // 分组所属类型
      }
    ];
  };
};

// #################################################
// 上传文件
// /uploadFile
// #################################################

// 请求
export type uploadFile = {
  token: string;
  formData: FormData;
  subsetId?: number; // 分组
};

// 响应
export type uploadFileRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    id: number;
    url: string; // 地址
    fileName: string;
    format: string; // 格式
    subsetId?: number; // 分组所属类型
  };
};

// #################################################
// 文件删除 (单个 多个)
// /deleteFile
// #################################################

// 请求
export type deleteFile = {
  token: string;
  files: number | number[]; // 文件id
};

// 响应
export type deleteFileRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 移动文件分类 (单个 多个; from to)
// /removeFile
// #################################################

// 请求
export type removeFile = {
  token: string;
  files: number | number[]; // 文件id
  subsetId: number; // 分组 to
};

// 响应
export type removeFileRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};
