import cors from "cors";
import express from "express";
import morgan from "morgan";

import config from "./config.js";
import Issue from "./model/issue.js";
import { convertTimestampToDateTime } from "./util/dateUtil.js";

// app
const app = express();
const { SERVER_PORT: port } = config;

// middleware
app.use(morgan("dev")); // logger
app.use(cors()); // CORS all

app.use(express.json()); // JSON parser
app.use(express.urlencoded({ extended: true })); // URL parser

/**
 * 时间戳处理
 */
app.use((req, _res, next) => {
  req.questTime = Date.now();
  // console.log(req.questTime); // 1726234573060
  // console.log(convertTimestampToDateTime(req.questTime)); // 2024-09-13 21:36:13
  next();
});

/**
 * 提交工单
 *
 * {
 *  "poster": "oswin",
 *  "description": "haha",
 *  "image": "https://avatars.githubusercontent.com/u/132178516?v=4"
 * }
 */
app.post("/issue", async (req, res) => {
  // TODO: time format in db
  const createDate = convertTimestampToDateTime(req.questTime); // time
  const { poster, description, image } = req.body; // state 默认值

  // 传参非空验证
  if (!poster || !description || !image) {
    let message = "Field Missing: ";

    if (!poster) message += "Poster, ";
    if (!description) message += "Description, ";
    if (!image) message += "Image ";

    res.status(400).json({
      status: "failed",
      message: `${message}.`,
    });
    return false;
  }

  // 提交工单 model
  const result = await Issue.create({
    poster,
    description,
    image,
    createDate, // model/issue.js
    state: "wait",
    fixedDate: null,
    staffId: null,
  });
  // response
  res.status(200).json({
    status: "success",
    data: result,
  });
});

// app
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
