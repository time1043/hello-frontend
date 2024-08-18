// #################################################
// 图片列表及图片搜索
// /gallery
// #################################################

// 请求
export type gallery = {
  token: string;
  nowPage: number; // 当前页码
  pageSize: number; // 每页数量
  status?: number; // 图片状态 已发布 未发布 (默认全部为图片列表)
  subsetId?: number; // 图片分组
  serchTerm?: string | number; // 搜索关键词 (为空则图片列表)
  count?: boolean; // 是否获取图片总数量
};

// 响应
type galleryRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    count?: number; // 总数量
    list: [
      {
        id: number; // 图片id
        title: string; // 图片标题
        subsetId?: number; // 图片分组
        moment: string; // 创建时间
        introduce?: string; // 图片简介
        cover?: string; // 图片封面
        content: string; // 文字内容
        views: number; // 图片浏览量
        comment: number; // 评论数量
        praise: number; // 点赞数量
      }
    ];
  };
};

// #################################################
// 删除图片
// /deleteGallery
// #################################################

// 请求
type deleteGallery = {
  token: string;
  galleryId: number; // 图片id
};

// 响应
type deleteGalleryRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};
