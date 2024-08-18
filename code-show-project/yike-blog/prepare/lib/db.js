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
