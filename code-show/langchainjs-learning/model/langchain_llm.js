// node model/langchain_llm.js
import { ChatOpenAI } from "@langchain/openai"; // npm install -S langchain  // npm install @langchain/openai
import config from "../config.js";

const { DEEPSEEK_API_KEY, DASHSCOPE_API_KEY, ZHIPU_AI_API_KEY } = config;

const llm_deepseek_chat = new ChatOpenAI({
  configuration: {
    apiKey: DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com",
  },
  model: "deepseek-chat",
});

const llm_deepeseek_coder = new ChatOpenAI({
  configuration: {
    apiKey: DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com",
  },
  model: "deepseek-coder",
});

const llm_qwen_turbo = new ChatOpenAI({
  configuration: {
    apiKey: DASHSCOPE_API_KEY,
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  },
  model: "qwen-turbo",
});

const llm_glm_4 = new ChatOpenAI({
  configuration: {
    apiKey: ZHIPU_AI_API_KEY,
    baseURL: "https://open.bigmodel.cn/api/paas/v4",
  },
  model: "glm-4",
});

export { llm_deepseek_chat, llm_deepeseek_coder, llm_qwen_turbo, llm_glm_4 };

// async function chat() {
//   const res = await llm_glm_4.invoke("给我实现一个rust的朴素贝叶斯算法");
//   console.log(res.content);
// }

// chat();
