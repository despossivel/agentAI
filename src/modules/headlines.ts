import { By, WebDriver } from 'selenium-webdriver';
import { OpenAi } from "../classes";
import { Headlines, Moderation } from "../types";


export async function collectHeadlines(driver: WebDriver): Promise<Headlines> {
    await driver.get(String(process.env.URL_NEWS));

    const headlineElements = await driver.findElements(
        By.xpath(
            '//div[contains(@class, "z--col z--w-1-2 z--mb-24")]/div/article/div/h3/a'
        )
    );

    return await Promise.all(
        headlineElements.slice(0, 5).map(async (element) => {
            const href = await element.getAttribute('href');
            const title = await element.getText();
            return { href, title, content: '', summarize: '', moderation: '' };
        })
    );
}

export async function collectContentAndSummaries(headlines: Headlines, driver: WebDriver, OPENAI: OpenAi): Promise<Headlines> {
    return await Promise.all(headlines.map(async (line) => {
        await driver.get(line.href);
        const articleBodyElement = await driver.findElement(By.className('tec--article__body'));
        const articleBodyText = await articleBodyElement.getText();
        line.content = articleBodyText;

        const response = await OPENAI.GPT4(String(line.content));
        line.summarize = response;

        const moderation: Moderation[] = await OPENAI.moderation(String(line.summarize))
        line.moderation = moderation

        return line
    }));
}