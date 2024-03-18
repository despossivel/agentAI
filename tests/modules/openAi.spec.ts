import { 
  authenticateOpenAi,
} from "../../src/modules"
import { OpenAi } from "../../src/classes";

import * as dotenv from 'dotenv';
dotenv.config();

describe('OpenAI Instance', () => {

  it('authenticateOpenAi', async () => { 
     const openAiInstance = new OpenAi(String(process.env.OPENAI_API_KEY), String(process.env.OPENAI_MODEL)); 
 
     const OPENAI = await authenticateOpenAi(String(process.env.OPENAI_API_KEY), String(process.env.OPENAI_MODEL));
 

     expect(OPENAI).toBeInstanceOf(OpenAi);


     expect(OPENAI).toEqual(openAiInstance); 

  });


});
