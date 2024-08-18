// #################################################
// 文章列表及文章搜索
// /article
// #################################################

// 请求
export type article = {
  token: string;
  nowPage: number; // 当前页码
  pageSize: number; // 每页数量
  status?: number; // 文章状态 已发布 未发布 (默认全部为文章列表)
  subsetId?: number; // 文章分组
  serchTerm?: string | number; // 搜索关键词 (为空则文章列表)
  count?: boolean; // 是否获取文章总数量
};

// 响应
type articleRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    count?: number; // 总数量
    list: [
      {
        id: number; // 文章id
        title: string; // 文章标题
        subsetId?: number; // 文章分组
        moment: string; // 创建时间
        label?: string[];
        introduce?: string; // 文章简介
        cover?: string; // 文章封面
        views: number; // 文章浏览量
        status: number; // 文章状态 0未发布 1已发布
        comment: number; // 评论数量
        praise: number; // 点赞数量
      }
    ];
  };
};

// #################################################
// 发布文章或撤回文章
// /changeArticleStatus
// #################################################

// 请求
export type changeArticleStatus = {
  token: string;
  aricleId: number; // 文章id
};

// 响应
type changeArticleStatusRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 删除文章
// /deleteArticle
// #################################################

// 请求
export type deleteArticle = {
  token: string;
  aricleId: number; // 文章id
};

// 响应
type deleteArticleRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 文章状态 (已发布 未发布)
// /articleState
// #################################################

// 请求
export type articleState = {
  token: string;
};

// 响应
type articleStateRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    id: number;
    name: "已发布" | "未发布";
    value: number; // 多少条
  }[];
};

// #################################################
// 文章及图库的新建
// /createArticle
// #################################################

// 请求
export type createArticle = {
  token: string;
  title: string; // 标题
  subsetId?: number; // 分组
  classify?: number;
  label?: string[];
  introduce?: string; // 简介
  cover?: string; // 封面
  content?: string; // 内容
  state?: number; // 状态 0未发布 1已发布
  moment?: string;
};

// 响应
type createArticleRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};

// #################################################
// 文章及图库的获取
// /gainArticle
// #################################################

// 请求
export type gainArticle = {
  token: string;
  articleId: number; // id
};

// 响应
type gainArticleRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
  data?: {
    id: number; // 文章id
    title: string; // 标题
    subsetId?: number; // 分组
    label?: string;
    introduce?: string; // 简介
    cover?: string; // 封面
    content?: string; // 内容
  };
};

// #################################################
// 文章及图库的修改
// /gainArticle
// #################################################

// 请求
export type updateArticle = {
  token: string;
  articleId: number; // id
  title: string; // 标题
  subsetId?: number; // 分组
  label?: string[];
  introduce?: string; // 简介
  cover?: string; // 封面
  content?: string; // 内容
  state?: number; // 状态 0未发布 1已发布
};

// 响应
type updateArticleRes = {
  code: number; // 200正常 300为经过token验证 500错误 400功能性拒绝
};
