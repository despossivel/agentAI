import { configureWebDriver } from '../../src/modules';
import { WebDriver } from 'selenium-webdriver';
import {
    collectHeadlines,
    collectContentAndSummaries,
    authenticateOpenAi
} from "../../src/modules"
import {
    Headlines
} from "../../src/types"
import * as dotenv from 'dotenv';
dotenv.config();

describe('configureWebDriver', () => {

    it('collectContentAndSummaries', async () => {
        const [driver, OPENAI] = await Promise.all([
            configureWebDriver(String(process.env.URL_NEWS)),
            authenticateOpenAi(String(process.env.OPENAI_API_KEY), String(process.env.OPENAI_MODEL))
        ])

        let headlines = await collectHeadlines(driver);
        headlines = await collectContentAndSummaries(headlines, driver, OPENAI);

        const expected: Headlines = [
            {
                href: expect.any(String),
                title: expect.any(String),
                content: expect.any(String),
                summarize: expect.any(String),
                moderation: expect.anything(),
            }
        ];

        expect(headlines).toEqual(expect.arrayContaining(expected));

    }, 150000);
});
