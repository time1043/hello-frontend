import { ChatOpenAI } from "@langchain/openai";
import config from "../config.js";
import LangchainModelEnum from "./ModelEnum.js";

// 配置信息
const {
  DEEPSEEK_API_KEY,
  DASHSCOPE_API_KEY,
  ZHIPU_AI_API_KEY,
  MOONSHOT_API_KEY,
} = config;

const modelConfigs = {
  [LangchainModelEnum.DEEPSEEK_CHAT]: {
    apiKey: DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com",
    model: "deepseek-chat",
  },
  [LangchainModelEnum.DEEPSEEK_CODER]: {
    apiKey: DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com",
    model: "deepseek-coder",
  },
  [LangchainModelEnum.QWEN_TURBO]: {
    apiKey: DASHSCOPE_API_KEY,
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    model: "qwen-turbo",
  },
  [LangchainModelEnum.GLM_4]: {
    apiKey: ZHIPU_AI_API_KEY,
    baseURL: "https://open.bigmodel.cn/api/paas/v4",
    model: "glm-4",
  },
  [LangchainModelEnum.MOONSHOT_V1_8K]: {
    apiKey: MOONSHOT_API_KEY,
    baseURL: "https://api.moonshot.cn/v1",
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
