// npm install --save-dev typescript && tsc --init  // tsconfig.json
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import createLangchainLLM from "./model/createLLM.js";
import LangchainModelEnum from "./model/ModelEnum.js";

const model = createLangchainLLM(LangchainModelEnum.DEEPSEEK_CHAT, 0.8);
const outputParser = new StringOutputParser();
const prompt = ChatPromptTemplate.fromTemplate(
  `你是一个小说赏析家, 请对下面句子提供5种角度解释: \n{sentence}`
);

// prompt -> model -> outputParser
const chain = prompt.pipe(model).pipe(outputParser);
const stream = await chain.stream({
  sentence: "鱼在水中游，是尾也是头。",
});

for await (const chunk of stream) {
  process.stdout.write(chunk); // log
}
