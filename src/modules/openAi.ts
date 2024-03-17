import { OpenAi } from "../classes";
 
export async function authenticateOpenAi(): Promise<OpenAi> {
    return new OpenAi(
      String(process.env.OPENAI_API_KEY),
      String(process.env.OPENAI_MODEL)
    );
  }
   

