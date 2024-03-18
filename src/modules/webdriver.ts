import { Builder, By, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

export async function configureWebDriver(URL: string): Promise<any> {
    const options = new Options();
    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

      await driver.get(URL);

      return driver
  }
   