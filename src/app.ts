import * as dotenv from 'dotenv';
import { promises as fs } from 'fs';
import {
  agent
} from "./modules"

dotenv.config();

(async () => {
  const data = await agent();
  await fs.writeFile('./output/data.json', JSON.stringify(data), 'utf8');
})()
