import { OpenAi } from '../../src/classes';
import * as dotenv from 'dotenv';
dotenv.config();

describe('OpenAi', () => {
  const OPENAI = new OpenAi(
    String(process.env.OPENAI_API_KEY),
    String(process.env.OPENAI_MODEL)
  );

  it('GPT4', async () => {
    const response = await OPENAI.GPT4(String(`Give me a simple text`));
    expect(response).toEqual(expect.any(String));

  });

  it('Moderation', async () => {
    const response = await OPENAI.moderation(String(`Give me a simple moderation text`));

    type ExpectedType = {
      categories: {
        [key: string]: boolean;
      };
      category_scores: {
        [key: string]: number;
      };
      flagged: boolean;
    };

    expect(response).toMatchObject<ExpectedType>(response);


  });


});
