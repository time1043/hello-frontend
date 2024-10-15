// node model/openai_llm.js
import OpenAI from "openai"; // npm i openai
import config from "../config.js";

const { DEEPSEEK_API_KEY, DASHSCOPE_API_KEY, ZHIPU_AI_API_KEY } = config;

const llm_deepeseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: DEEPSEEK_API_KEY,
}); // deepseek-chat deepseek-coder

const llm_qwen = new OpenAI({
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  apiKey: DASHSCOPE_API_KEY,
}); // qwen-turbo

const llm_zhipu = new OpenAI({
  baseURL: "https://open.bigmodel.cn/api/paas/v4",
  apiKey: ZHIPU_AI_API_KEY,
}); // glm-4

export { llm_deepeseek, llm_qwen, llm_zhipu };

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

// chat();
