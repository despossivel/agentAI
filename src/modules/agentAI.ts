import { WebDriver } from 'selenium-webdriver';
import { Headlines } from "../types";
import { rankScore } from "../utils";
import {
  collectHeadlines,
  collectContentAndSummaries
} from "../modules"
import { OpenAi } from '../classes';
 

export async function agent(driver: WebDriver, OPENAI: OpenAi): Promise<Headlines> {
  try {
    let headlines = await collectHeadlines(driver);
    headlines = await collectContentAndSummaries(headlines, driver, OPENAI);
    return rankScore(headlines);
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}
