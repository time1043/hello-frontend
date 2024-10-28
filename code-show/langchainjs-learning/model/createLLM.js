import { ChatOpenAI } from "@langchain/openai";
import config from "../config.js";
import LangchainModelEnum from "./ModelEnum.js";

// 配置信息 (数据库持久化 加密 表格CRUD)
const {
  OPENAI_URL_PROXY,
  OPENAI_API_KEY,
  DEEPSEEK_URL,
  DEEPSEEK_API_KEY,
  DASHSCOPE_URL,
  DASHSCOPE_API_KEY,
  ZHIPU_URL,
  ZHIPU_API_KEY,
  MOONSHOT_URL,
  MOONSHOT_API_KEY,
} = config;

const modelConfigs = {
  [LangchainModelEnum.GPT_4O]: {
    apiKey: OPENAI_API_KEY,
    baseURL: OPENAI_URL_PROXY,
    model: "gpt-4o",
  },
  [LangchainModelEnum.DEEPSEEK_CHAT]: {
    apiKey: DEEPSEEK_API_KEY,
    baseURL: DEEPSEEK_URL,
    model: "deepseek-chat",
  },
  [LangchainModelEnum.DEEPSEEK_CODER]: {
    apiKey: DEEPSEEK_API_KEY,
    baseURL: DEEPSEEK_URL,
    model: "deepseek-coder",
  },
  [LangchainModelEnum.QWEN_TURBO]: {
    apiKey: DASHSCOPE_API_KEY,
    baseURL: DASHSCOPE_URL,
    model: "qwen-turbo",
  },
  [LangchainModelEnum.GLM_4]: {
    apiKey: ZHIPU_API_KEY,
    baseURL: ZHIPU_URL,
    model: "glm-4",
  },
  [LangchainModelEnum.MOONSHOT_V1_8K]: {
    apiKey: MOONSHOT_API_KEY,
    baseURL: MOONSHOT_URL,
    model: "moonshot-v1-8k",
  },
};

// 工厂函数
const createLangchainLLM = (modelConfig, temperature = 0.7) => {
  const config = modelConfigs[modelConfig];
  if (!config) {
    throw new Error(`Model ${modelConfig} is not defined.`);
  }
  return new ChatOpenAI({
    configuration: {
      apiKey: config.apiKey,
      baseURL: config.baseURL,
    },
    model: config.model,
    temperature,
  });
};

export default createLangchainLLM;

// async function chat() {
//   const model = createLangchainLLM(ModelEnum.DEEPSEEK_CHAT, 0.1);
//   const input = "所谓要改变的命运又何尝不是无法改变的过去";
//   //const input = "给我实现一个rust的朴素贝叶斯算法";
//
//   //const res = await model.invoke(input);
//   //console.log(res.content);
//
//   for await (const chunk of await model.stream(input)) {
//     process.stdout.write(chunk.content); // log
//   }
// }

// chat();
