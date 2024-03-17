import { rankingLength, rankContent, rankScore } from '../../src/utils';
import {
    Headlines
} from "../../src/types"
import MOCK from "./mock.json"


describe('Ranking', () => {
    it('rankingLength type', async () => {
        const length = rankingLength('Lorem ipsum')
        expect(typeof length).toEqual('number');
    });

    it('rankingLength', async () => {
        const length = rankingLength('Lorem ipsum')
        expect(length).toEqual(11);
    });

    it('rankContent', async () => {
        const data = MOCK

        const expected: Headlines = [
            {
                href: expect.any(String),
                title: expect.any(String),
                content: expect.any(String),
                summarize: expect.any(String),
                moderation: expect.anything(),
            }
        ];

        const rank = rankContent(data)
        expect(rank).toEqual(expect.arrayContaining(expected));

    });

    it('rankScore', async () => {
        const data = MOCK

        const expected: Headlines = [
            {
                href: expect.any(String),
                title: expect.any(String),
                content: expect.any(String),
                summarize: expect.any(String),
                moderation: expect.anything(),
            }
        ];

        const rank = rankScore(data)
        expect(rank).toEqual(expect.arrayContaining(expected));

    });



    // rankContent

});
