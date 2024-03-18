import { agent } from '../src/modules';
import {
  Headlines
} from "../src/types"
import {
  configureWebDriver,
  authenticateOpenAi,
} from "../src/modules"
import * as dotenv from 'dotenv';
dotenv.config();

describe('Agent', () => {
  it('returns an array of Headlines', async () => {
    const [driver, OPENAI] = await Promise.all([
      configureWebDriver(),
      authenticateOpenAi(String(process.env.OPENAI_API_KEY), String(process.env.OPENAI_MODEL))
    ])

    const actual = await agent(driver, OPENAI);
    const expected: Headlines = [
      {
        href: expect.any(String),
        title: expect.any(String),
        content: expect.any(String),
        summarize: expect.any(String),
        moderation: expect.anything(),
      }
    ];
 
    expect(actual).toEqual(expect.arrayContaining(expected));

  }, 150000);


});
