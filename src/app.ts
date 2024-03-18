import * as dotenv from 'dotenv';
import { promises as fs } from 'fs';
import {
  agent
} from "./modules"
import {
  configureWebDriver,
  authenticateOpenAi,
} from "./modules"
dotenv.config();

(async () => {

  const [driver, OPENAI] = await Promise.all([
    configureWebDriver(String(process.env.URL_NEWS)),
    authenticateOpenAi(String(process.env.OPENAI_API_KEY), String(process.env.OPENAI_MODEL))
  ])

  const data = await agent(driver, OPENAI);
  
  await fs.writeFile('./output/data.json', JSON.stringify(data), 'utf8');
})()
