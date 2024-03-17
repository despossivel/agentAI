import { Builder, By, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

export async function configureWebDriver(): Promise<WebDriver> {
    const options = new Options();
    return await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  }
   