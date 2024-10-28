// node modelo/openai_llm.js
import OpenAI from "openai"; // npm i openai
import { ChatCompletion, setEnvVariable } from "@baiducloud/qianfan"; // npm install @baiducloud/qianfan
import config from "../config.js";

const {
  DEEPSEEK_API_KEY,
  DASHSCOPE_API_KEY,
  ZHIPU_AI_API_KEY,
  QIANFAN_ACCESS_KEY,
  QIANFAN_SECRET_KEY,
} = config;

// #################################################
// openai sdk
// #################################################
const LLMDeepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: DEEPSEEK_API_KEY,
}); // deepseek-chat deepseek-coder

const LLMQwen = new OpenAI({
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  apiKey: DASHSCOPE_API_KEY,
}); // qwen-turbo

const LLMZhipu = new OpenAI({
  baseURL: "https://open.bigmodel.cn/api/paas/v4",
  apiKey: ZHIPU_AI_API_KEY,
}); // glm-4

// #################################################
// qianfan sdk
// #################################################
setEnvVariable("QIANFAN_ACCESS_KEY", QIANFAN_ACCESS_KEY);
setEnvVariable("QIANFAN_SECRET_KEY", QIANFAN_SECRET_KEY);
const LLMQianfan = new ChatCompletion();

export { LLMDeepseek, LLMQwen, LLMZhipu, LLMQianfan };

// async function chat() {
//   const completion = await llm_zhipu.chat.completions.create({
//     messages: [
//       { role: "system", content: "You are a helpful assistant." },
//       { role: "user", content: "How can I help you?" },
//     ],
//     model: "glm-4",
//   });
//   console.log(completion.choices[0].message.content);
// }

// // https://cloud.baidu.com/doc/WENXINWORKSHOP/s/jlil56u11
// // https://console.bce.baidu.com/qianfan/chargemanage/list
// async function chat2() {
//   const resp = await LLMQianfan.chat(
//     {
//       messages: [
//         {
//           role: "user",
//           content: "你好",
//         },
//       ],
//     },
//     "ERNIE-3.5-8K-0613"
//   );
//   console.log(resp);
// }

// chat2();
