
import * as dotenv from 'dotenv';
import { WebDriver } from 'selenium-webdriver';
import { Headlines } from "../types";
import { rankScore } from "../utils";
import {
  configureWebDriver,
  authenticateOpenAi,
  collectHeadlines,
  collectContentAndSummaries
} from "../modules"
dotenv.config();

export async function agent(): Promise<Headlines> {
  let driver: WebDriver | null = null;
  try {
    driver = await configureWebDriver();
    const OPENAI = await authenticateOpenAi();
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
