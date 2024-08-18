# yike-blog

- Reference

  Yike Design : https://yike.design 

  github地址：https://github.com/ecaps1038/yike-design-dev 

  博客管理后台demo: https://www.huohuo90.com:3006 

  个人网站：http://www.huohuo90.com 

  留言墙：https://www.huohuo90.com:3002 

  设计稿地址：https://codesign.qq.com/s/3P04bam21lVbRjn  访问密码：ANOT





## 背景介绍

### 项目规划

- 前台 用户端

- 后台 管理端

  



### 技术选型

- 技术选型

  前端：vue3 + ts + yike design

  后端：nodejs + express

  数据库：mysql





## 页面设计 ✔

- 登陆注册

  用户端登陆

- 前台

  首页

  博客文章、搜索无结果、搜索有结果、新建文章、标签管理

  本地资源、管理图层

  摄影图库、摄影管理、新建摄影

  随记

- 后台

  首页

  



### 登陆注册

- 用户登陆 (前台)

  ![](/opt/code/frontend-code/hello-frontend/note-project/res/Snipaste_2024-08-18_12-54-41.png)
  
- 管理员登陆 (后台)

- 用户注册

  



### 前台页面

#### 首页

- 总览

  ![](res/Snipaste_2024-08-18_12-51-26.png)

  



#### 博客文章 ✔

- 博客文章

  ![](res/Snipaste_2024-08-18_13-00-02.png)

- 博客文章搜索无结果

  ![](res/Snipaste_2024-08-18_12-59-41.png)

- 博客文章搜索结果

  ![](res/Snipaste_2024-08-18_13-01-02.png)

- 新建博客文章

  ![](res/Snipaste_2024-08-18_12-58-40.png)

  



#### 文章分组+ 文章标签+

- 分组管理

  ![](res/Snipaste_2024-08-18_12-58-20.png)

- 标签管理

  ![](res/Snipaste_2024-08-18_12-57-23.png)

  



#### 本地文件

- 本地文件

  ![](res/Snipaste_2024-08-18_13-00-16.png)

  




#### 摄影图库 ✔

- 摄影图库

  ![](res/Snipaste_2024-08-18_13-00-40.png)

- 摄影管理

  ![](res/Snipaste_2024-08-18_12-57-04.png)

- 新建摄影

  ![](res/Snipaste_2024-08-18_12-59-03.png)

  



#### 随笔随记 ✔

- 随笔随记

  ![](res/Snipaste_2024-08-18_13-00-51.png)

  



### 后台页面

#### 首页





## 库表设计 ✔

- 用户系统

  todo
  
  



### 信息梳理

- 用户 user

  id、名字、邮箱、密码、头像地址、*创建时间*

- 分类 subset

  id、分类名称、所属类型(0文章 1摄影 2资源)、*创建时间*

- 本地文件 file (图片 音频 视频)

  id、文件地址、文件名称、文件格式、所属分类id、*创建时间*

  


---

- 文章和图库 article 

  id、标题、所属分类id、所属类型(0文章 1摄影)、标签、简介、内容、封面、查看次数、文章状态(0未发布 1已发布)、*创建时间*

- 文章点赞 praise

  id、所属文章id、点赞者id、用户类型(0登陆用户 1游客)、*创建时间*

- 文章评论 comment

  id、所属文章id、评论者id、用户名称、用户类型(0登陆用户 1游客)、*创建时间*、评论内容、举报数、评论是否查看(0未读 1已读)

- 标签 label

  id、标签名称、*创建时间*



---

- 日记 diary

  id、标题、内容、图片、天气id、心情、*创建时间*

- 天气 weather

  id、天气名称、天气图标

- 私信 message

  id、用户id、用户类型(0登陆用户 1游客)、联系方式(user_name)、*创建时间*、内容、是否已读(0未读 1已读)

- 埋点 record

  id、用户id、用户类型(0登陆用户 1游客)、*创建时间*、**访问位置**、访问设备(0移动端 1PC)





### 后端对象

- 后端对象

  ```js
  // #################################################
  // 用户
  // #################################################
  let user = `create table if not exists user(
      id int not null auto_increment,
      name varchar(100) not null comment '用户名',
      mail varchar(100) not null comment '邮箱',
      password varchar(100) not null comment '密码',
      moment varchar(100) not null comment '创建时间',
      imgurl varchar(100) comment '用户头像地址',
      primary key(id)
      )`;
  
  // 分类
  let subset = `create table if not exists subset(
      id int not null auto_increment,
      subset_name varchar(100) not null comment '分类名称',
      classify int not null comment '所属类型(0文章 1摄影 2资源)',
      moment varchar(100) not null comment '创建时间',
      primary key(id)
      )`;
  
  // 文件
  let file = `create table if not exists file(
      id int not null auto_increment,
      url varchar(100) not null comment '文件地址',
      file_name varchar(100) not null comment '文件名称',
      format varchar(32) not null comment '文件格式', 
      subset_id int comment '所属分类id',
      moment varchar(100) not null comment '创建时间',
      primary key(id)
      )`;
  
  // #################################################
  // 文章及图库
  // #################################################
  let article = `create table if not exists article(
      id int not null auto_increment,
      title varchar(200) not null comment '文章标题',
      subset_id int comment '所属分类id',
      classify int not null comment '所属类型(0文章 1摄影)',
      label varchar(200) comment '文章标签',
      brief varchar(1000) comment '文章简介',
      content varchar(5000) comment '文章内容',
      cover varchar(100) comment '文章封面',
      views int default 0 comment '文章查看次数',
      state int default 0 comment '文章状态(0未发布 1已发布)',
      moment varchar(100) not null comment '创建时间',
      primary key(id)
      )`;
  
  // 文章点赞
  let praise = `create table if not exists praise(
      id int not null auto_increment,
      article_id int not null comment '所属文章id',
      user_id int not null comment '点赞者id',
      user_type int not null comment '用户类型(0登陆用户 1游客)',
      moment varchar(100) not null comment '创建时间',
      primary key(id)
      )`;
  
  // 文章评论
  let comment = `create table if not exists comment(
      id int not null auto_increment,
      article_id int not null comment '所属文章id',
      user_id int not null comment '评论者id',
      user_type int not null comment '用户类型(0登陆用户 1游客)',
      moment varchar(100) not null comment '创建时间',
      content varchar(1000) not null comment '评论内容',
      report int default0 comment '举报数',
      isread int default 0 comment '评论是否查看(0未读 1已读)',
      primary key(id)
      )`;
  
  // 标签
  let label = `create table if not exists label(
      id int not null auto_increment,
      label_name varchar(100) not null comment '标签名称',
      moment varchar(100) not null comment '创建时间',
      primary key(id)
      )`;
  
  // #################################################
  // 日记
  // #################################################
  let diary = `create table if not exists diary(
      id int not null auto_increment,
      title varchar(200) not null comment '日记标题',
      content varchar(5000) not null comment '日记内容',
      picture varchar(500) comment '图片地址',
      weather_id int comment '天气id',
      mood int default 0 comment '心情',
      moment varchar(100) not null comment '创建时间',
      primary key(id)
      )`;
  
  // 天气
  let weather = `create table if not exists weather(
      id int not null auto_increment,
      weather_name varchar(100) not null comment '天气名称',
      icon varchar(100) comment '天气图标',
      primary key(id)
      )`;
  
  // 私信
  let message = `create table if not exists message(
      id int not null auto_increment,
      user_id int not null comment '用户id',
      user_type int not null comment '用户类型(0登陆用户 1游客)',
      user_name varchar(100) comment '用户名称 联系方式',
      moment varchar(100) not null comment '创建时间',
      content varchar(1000) not null comment '内容',
      isread int default 0 comment'是否已读(0未读 1已读)',
      primary key(id)
      )`;
  
  // 埋点
  let record = `create table if not exists record(
      id int not null auto_increment,
      user_id int not null comment '用户id',
      user_type int not null comment '用户类型(0登陆用户 1游客)',
      moment varchar(100) not null comment '创建时间',
      position varchar(100) not null comment '访问位置',
      device int not null comment '访问设备(0移动端 1PC)',
      primary key(id)
      )`;
  
  ```

  



### 建表语句

- 环境准备

  ```bash
  
  ```

  



## 接口数据 ✔

### 首页

- 首页用户

  登陆 `/signin`

  总览数据 `/overview`

  访问量 `/visits`

  数据监测 `/survey`

  评论 `/comment`

  私信反馈 `/message`

  ```typescript
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
  
  ```
  
  ![](res/Snipaste_2024-08-18_12-51-26.png)
  
  



### 博客文章 ✔

- 博客文章

  文章列表及文章搜索`/article`

  发布文章或撤回文章`changeArticleStatus`

  删除文章`/deleteArticle`

  文章状态`/articleState`

  ```typescript
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
  
  ```
  
  ![](res/Snipaste_2024-08-18_13-00-02.png)
  
  



### 文章分组+

- 文章分组 +

  分组`/subset`

  新建分组`/addsSubset`

  修改分组`/updateSubset`

  删除分组`/deleteSubset`

  ```typescript
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
  
  ```

  ![](res/Snipaste_2024-08-18_12-58-20.png)

  



### 文章标签+

- 文章标签 +

  标签`/label`

  新建标签`/addLabel`

  删除标签`/deleteLabel`

  ```typescript
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
  
  ```

  ![](res/Snipaste_2024-08-18_12-57-23.png)
  



### 本地文件

- 本地文件

  文件`/file`

  上传文件`/uploadFile`

  删除文件`/deleteFile`

  移动文件分类`/removeFile`
  
  ```typescript
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
  
  ```
  
  ![](res/Snipaste_2024-08-18_13-00-16.png)
  
  



### 搭建图库 ✔

- 搭建图库

  图片列表及图片搜索`/gallery`

  删除图片`/deleteGallery`

  ```typescript
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
  
  ```

  ![](res/Snipaste_2024-08-18_13-00-40.png)

  



### 随笔随记 ✔

- 随笔随记

  随笔列表及随笔搜索`/diary`

  随笔删除`deleteDiary`

  ```typescript
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
  
  ```

  ![](res/Snipaste_2024-08-18_13-00-51.png)

  



## 前端初始化

### 新建项目

- 脚手架新建项目 

  [vite](https://vitejs.dev/guide/)

  ```bash
  npm create vite@latest  # blog-frontend  # Vue  # TypeScript
  
  cd blog-frontend
  npm install
  npm run dev
  
  ```

- 安装依赖

  less、[ui组件库](https://yike.design) 

  ```bash
  # less
  npm install less --save-dev
  
  # ui lib
  npm install --save-dev @yike-design/ui
  # plugin ...
  npm install @yike-design/resolver
  
  ```

  



#### less test (test x)

- less

  ```vue
  <template>
    <div class="test">test less</div>
  </template>
  
  <style scoped lang="less">
  @color: #00aaee;
  .test {
    color: @color;
  }
  </style>
  
  ```

  



#### yike design (test x)

- 按需引入

  vite.config.ts

  ```typescript
  import { defineConfig } from "vite";
  import vue from "@vitejs/plugin-vue";
  
  import AutoImport from "unplugin-auto-import/vite";
  import Components from "unplugin-vue-components/vite";
  import { YikeResolver } from "@yike-design/resolver"; // https://vitejs.dev/config/ export default
  
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [
      vue(),
      AutoImport({ resolvers: [YikeResolver()] }),
      Components({ resolvers: [YikeResolver({ sideEffect: true })] }),
    ],
  
    // css预处理器
    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData:
            '@import "@yike-design/ui/es/components/styles/basis.less";',
        },
      },
    },
  });
  
  ```

  main.ts

  ```typescript
  import { createApp } from "vue";
  import "./style.css";
  import App from "./App.vue";
  
  import "@yike-design/ui/es/index.less";
  import { YkMessage, YkNotification } from "@yike-design/ui";
  
  const app = createApp(App);
  app.config.globalProperties.$notification = YkNotification;
  app.config.globalProperties.$message = YkMessage;
  app.mount("#app");
  
  ```

  App.vue

  ```vue
  <template>
    <yk-space>
      <yk-button>主要按钮</yk-button>
      <yk-button type="secondary">次要按钮</yk-button>
      <yk-button type="outline">线框按钮</yk-button>
    </yk-space>
    <yk-pagination :total="1000" fix-width></yk-pagination>
  </template>
  
  ```

  



### 路由配置 ✔

#### 路由

- [vue router](https://router.vuejs.org/zh/installation.html)

  [入门使用](https://router.vuejs.org/zh/guide/)、[嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

  ```bash
  npm install vue-router@4 --save-dev
  
  # 创建路由
  mkdir src/router
  touch src/router/index.ts
  
  # 创建页面
  mkdir src/views
  touch src/views/IndexView.vue  # 有菜单
  touch src/views/OverView.vue  # 首页页面
  # 创建组件
  mkdir src/components/bar
  touch src/components/bar/HeadBar.vue
  touch src/components/bar/MenuBar.vue
  touch src/components/bar/TopTitle.vue
  # 静态数据
  mkdir src/utils
  touch src/utils/menu.ts
  
  ```
  
  router/index.ts  [createWebHistory](https://router.vuejs.org/zh/guide/essentials/history-mode.html)
  
  ```typescript
  import { createWebHistory, createRouter } from "vue-router";
  
  import IndexView from "../views/IndexView.vue";
  import Hello from "../components/HelloWorld.vue";
  
  const routes = [
    {
      path: "/",
      component: IndexView,
      redirect: "/overview",
      children: [
        {
          path: "overview",
          component: () => import("../views/OverView.vue"),
        },
        {
          path: "hello",
          component: Hello,
        },
      ],
    },
    {
      path: "/world",
      component: Hello,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  
  ```
  
  main.ts
  
  ```typescript
  import { createApp } from "vue";
  import { YkMessage, YkNotification } from "@yike-design/ui";
  import App from "./App.vue";
  import router from "./router";
  import "@yike-design/ui/es/index.less";
  import "./style.less";
  
  const app = createApp(App);
  app.config.globalProperties.$notification = YkNotification;
  app.config.globalProperties.$message = YkMessage;
  
  app.use(router).mount("#app");
  
  ```
  
  



#### 页面

- App.vue

  ```vue
  <template>
    <!-- 顶部导航栏 -->
    <div>顶部导航栏</div>
    <!-- 路由 -->
    <router-view />
  </template>
  ```

- views/IndexView.vue

  ```vue
  <template>
    <!-- 菜单 -->
    <div>菜单</div>
    <!-- 子路由 -->
    <router-view />
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped lang="less"></style>
  
  ```

- views/OverView.vue

  ```vue
  <template>
    <div>总览</div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped lang="less"></style>
  
  ```

  





## 前端页面

- 主要页面

  **总览页面**：前台首页、*博客页面*、本地资源、*摄影图库*、*随记页面*

  **新建页面**：*新建文章*、*新建摄影*

- 拆分组件

  顶部导航栏：图标、标题；邮箱、头像、主题按钮、退出按钮 (都有 *app.vue*)

  左边菜单栏 (总览页面有 新建页面无)

  标题条：标题组件、搜索栏(可关闭)、支持自定义内容

  总览卡片

  数据统计卡片

  评论

  私信

- 拆分组件

  

  弹窗

  富文本编辑器

  ![](res/Snipaste_2024-08-18_12-51-26.png)

  ![](res/Snipaste_2024-08-18_12-58-40.png)

  



### 全局样式

- 清空之前

  ```bash
  rm -rf src/style.css 
  touch src/style.less 
  
  ```

- style.less (main.ts 层叠型样式)

  全局背景、因顶部栏下移

  ```less
  body {
    background-color: @bg-color-m;
  }
  
  #app {
    padding-top: 64px;
  }
  
  ```

  



### 页面组件

- App.vue

  ```vue
  <template>
    <!-- 顶部导航栏 -->
    <head-bar />
    <!-- 路由 -->
    <router-view />
  </template>
  
  <script setup lang="ts">
  import HeadBar from "./components/bar/HeadBar.vue";
  </script>
  
  <style scoped lang="less"></style>
  
  ```

  views/IndexView.vue

  ```vue
  <template>
    <div class="index-view">
      <!-- 菜单 -->
      <menu-bar />
      <!-- 子路由 -->
      <router-view />
    </div>
  </template>
  
  <script setup lang="ts">
  import MenuBar from "../components/bar/MenuBar.vue";
  </script>
  
  <style scoped lang="less">
  .index-view {
    padding: 32px 32px 32px 232px;
  }
  </style>
  
  ```

  views/OverView.vue

  ```vue
  <template>
    <top-title :is-search="false" />
  </template>
  
  <script setup lang="ts">
  import TopTitle from "../components/bar/TopTitle.vue";
  </script>
  
  <style scoped lang="less"></style>
  
  ```

  



### 组件：HeadBar

- components/HeadBar.vue

  html元素和布局(用间距布局)、css样式、js动态(点击路由首页)

  ```vue
  <template>
    <div class="head-bar">
      <!-- 左边：logo、标题名称 -->
      <yk-space
        align="center"
        :size="12"
        style="cursor: pointer"
        @click="backHome"
      >
        <img src="../../assets/vue.svg" class="logo" />
        <span class="name">Blog oswin</span>
      </yk-space>
  
      <!-- 右边：邮箱、头像、深浅切换、退出按钮 -->
      <yk-space align="center" size="xl">
        <!-- 邮箱 数据展示的徽标 -->
        <yk-badge is-dot>
          <IconEmailFill style="font-size: 20px" />
        </yk-badge>
        <!-- 头像 数据展示 -->
        <yk-avatar
          img-url="https://www.huohuo90.com:3003/user/6353b034dd4b583975e77fbe.png"
        ></yk-avatar>
        <!-- 深浅切换 暗黑模式 -->
        <div><yk-theme /></div>
        <!-- 退出按钮 -->
        <yk-button>退出</yk-button>
      </yk-space>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router";
  const router = useRouter();
  // 返回总览页面
  const backHome = () => {
    router.push("/");
  };
  </script>
  
  <style scoped lang="less">
  .head-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: @bg-color-l;
    z-index: 10;
    display: flex; // 一行布局
    justify-content: space-between; // 两边分
    align-items: center; // 上下居中
    padding: 0 @space-xl;
  
    .logo {
      height: 38px;
    }
    .name {
      font-size: 20px;
      font-weight: 600;
    }
  }
  </style>
  
  ```
  
  



### 组件：MenuBar

- components/bar/MenuBar.vue

  html元素和布局、css样式、js动态(点中变色)

  ```typescript
  <template>
    <!-- space 竖排 -->
    <yk-space dir="vertical" class="menu-bar" size="m">
      <!-- 路由跳转 v-for -->
      <router-link
        :to="item.path"
        v-for="item in navLinks"
        :key="item.path"
        class="menu-bar__nav"
      >
        <yk-space align="center" size="m">
          <component :is="item.icon" />
          <yk-text>{{ item.name }}</yk-text>
        </yk-space>
      </router-link>
    </yk-space>
  </template>
  
  <script setup lang="ts">
  import { navLinks } from "../../utils/menu";
  </script>
  
  <style scoped lang="less">
  .menu-bar {
    padding: @space-l;
    position: fixed;
    top: 72px;
    left: 8px;
  
    &__nav {
      width: 160px;
      height: 40px;
      border-radius: @radius-m;
      padding: 0 @space-l;
      display: flex;
      align-items: center; // 上下居中
      text-decoration: none; // 去掉下划线
  
      .yk-icon {
        color: @font-color-ss;
        width: 16px;
        height: 16px;
      }
  
      &:hover {
        // 鼠标悬停
        background: @bg-color-l; // 背景显色
        .yk-text {
          font-weight: 600; // 聚焦字体加粗
        }
      }
    }
    .router-link-active {
      // 被选中
      background: linear-gradient(180deg, #2b5aedde 0%, #2b5aed 100%);
      .yk-icon {
        color: @bg-color-l;
      }
      .yk-text {
        color: @bg-color-l;
        font-weight: 600; // 聚焦字体加粗
      }
    }
  }
  </style>
  
  ```

- utils/menu.ts

  ```typescript
  export const navLinks = [
    {
      path: "overview",
      name: "总览",
      icon: "IconHomepageOutline",
    },
    {
      path: "localfile",
      name: "本地文件",
      icon: "IconFolderCloseFill",
    },
    {
      path: "article",
      name: "博客文章",
      icon: "IconBookmarkFill",
    },
    {
      path: "gallery",
      name: "摄影图库",
      icon: "IconCameraFill",
    },
    {
      path: "diary",
      name: "随笔随记",
      icon: "IconFillFill",
    },
    {
      path: "setting",
      name: "设置",
      icon: "IconSettingsFill",
    },
  ];
  
  ```

  



### 组件：TopTitle

- components/bar/TopTitle.vue

  父子组件通信prop

  ```vue
  <template>
    <div class="top-title">
      <!-- 标题 -->
      <yk-title :level="3" style="margin: 0; line-height: 36px">{{
        props.name
      }}</yk-title>
      <!-- 搜索栏(可关闭) 取消按钮(输入后) v-if v-show-->
      <slot name="custom" />
      <yk-space size="m" v-if="isSearch">
        <yk-button type="secondary" v-show="SearchData" @click="cancelSearch"
          >取消搜索</yk-button
        >
        <yk-input-search
          style="width: 320px"
          placeholder="请输入..."
          v-model="SearchData"
          @search="search"
        >
          <template #suffix>
            <yk-button type="secondary"><IconSearchOutline /></yk-button>
          </template>
        </yk-input-search>
      </yk-space>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  // 标题字样 搜索栏 (父子组件通信prop)
  type titleProps = {
    name: string;
    isSearch: boolean;
  };
  const props = withDefaults(defineProps<titleProps>(), {
    name: "总览",
    isSearch: true, // 默认有搜索栏
  });
  
  // 取消按钮(输入后才出现)
  const SearchData = ref();
  
  // 搜索数据
  const emit = defineEmits(["search"]);
  // 搜索事件 搜索数据交给父组件
  const search = () => {
    emit("search", SearchData.value);
  };
  // 取消搜索事件
  const cancelSearch = () => {
    emit("search", "");
    SearchData.value = "";
  };
  </script>
  
  <style scoped lang="less">
  .top-title {
    display: flex; // 一行布局
    align-items: center; // 上下居中
    justify-content: space-between; // 两边分
  }
  </style>
  
  ```

  



































