import * as dotenv from 'dotenv';
import { promises as fs } from 'fs';
import {
  agent
} from "./modules"
import {
  configureWebDriver,
  authenticateOpenAi,
} from "./modules"
import { OpenAi } from './classes';
dotenv.config();



(async () => {

  const driver = await configureWebDriver();
  const OPENAI: OpenAi = await authenticateOpenAi(String(process.env.OPENAI_API_KEY), String(process.env.OPENAI_MODEL));

  const data = await agent(driver, OPENAI);


  await fs.writeFile('./output/data.json', JSON.stringify(data), 'utf8');
})()
