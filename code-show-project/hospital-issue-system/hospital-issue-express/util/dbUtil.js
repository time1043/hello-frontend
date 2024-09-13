// https://www.sequelize.cn/core-concepts/getting-started
import { Sequelize } from "sequelize";
import Config from "../config.js";

const {
  LOCAL_DATABASE: database,
  LOCAL_DB_USERNAME: username,
  LOCAL_DB_PASSWORD: password,
  LOCAL_DB_HOST: host,
  LOCAL_DB_PORT: port,
} = Config;

// connect to mysql
export const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: "mysql",
});

// // test connection  // node ./util/dbUtil.js
// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
