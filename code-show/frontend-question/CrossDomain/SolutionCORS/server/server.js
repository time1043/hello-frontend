// npm install -g nodemon
// nodemon server.js

const express = require("express");
const app = express();

const students = [
  { id: "2424001", name: "ZhangSan", age: 20 },
  { id: "2424002", name: "LiSi", age: 21 },
  { id: "2424003", name: "WangWu", age: 22 },
];

app.post("/students", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // *  // 只能处理简单请求
  res.send(students);
});

app.listen(8081, () => {
  console.log("server is running at http://localhost:8081");
});
