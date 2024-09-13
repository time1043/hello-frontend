// https://www.sequelize.cn/core-concepts/model-basics
import { DataTypes } from "sequelize";
import { sequelize } from "../util/dbUtil.js";

/*
CREATE TABLE `issue` (
    `id` int NOT NULL AUTO_INCREMENT,
    `poster` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `create_date` datetime NOT NULL,
    `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    `state` enum('wait','fixing','complete') COLLATE utf8mb4_unicode_ci DEFAULT 'wait',
    `fixed_date` datetime DEFAULT NULL,
    `staff_id` int DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
**/

const Issue = sequelize.define(
  "Issue",
  {
    // 在这里定义模型属性
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   allowNull: false,
    // },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "create_date",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM,
      values: ["wait", "fixing", "complete"],
      allowNull: false,
      defaultValue: "wait",
    },
    fixedDate: {
      type: DataTypes.DATE,
      allowNull: true, // null
      field: "fixed_date",
    },
    staffId: {
      type: DataTypes.INTEGER,
      allowNull: true, // null
      field: "staff_id",
    },
  },
  {
    tableName: "issue", // no issues
    createdAt: false, // no createAt
    updatedAt: false, // no updateAt
  }
);

// // `sequelize.define` 会返回模型
// console.log(Issue === sequelize.models.Issue); // true

// // node ./model/issue.js
// const res = await Issue.findAll();
// console.log(res[0].dataValues);

export default Issue;
