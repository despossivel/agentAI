import { configureWebDriver } from '../../src/modules';  
import { WebDriver } from 'selenium-webdriver';  

describe('configureWebDriver', () => {
  it('should return a valid WebDriver instance', async () => {
 
    const webDriverInstance = await configureWebDriver();
    expect(webDriverInstance).toBeInstanceOf(WebDriver); 
    expect(webDriverInstance).not.toBeNull();

  });
});
