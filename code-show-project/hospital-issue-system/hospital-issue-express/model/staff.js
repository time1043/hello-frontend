// https://www.sequelize.cn/core-concepts/model-basics
import { DataTypes } from "sequelize";
import { sequelize } from "../util/dbUtil.js";

/*
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `staff_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_role` enum('admin','staff') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'staff',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
**/

const Staff = sequelize.define(
  "Staff",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    staffName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: "staff_name",
    },
    staffRole: {
      type: DataTypes.ENUM,
      values: ["admin", "staff"],
      defaultValue: "staff",
      allowNull: false,
      field: "staff_role",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "staff",
    createdAt: false,
    updatedAt: false,
  }
);

// // node ./model/staff.js
// const results = await Staff.findAll();
// console.log(results.forEach((result) => console.log(result.dataValues)));

export default Staff;
