import { OpenAi } from "../classes";

export async function authenticateOpenAi(OPENAI_API_KEY: string, OPENAI_MODEL: string): Promise<OpenAi> {
  return new OpenAi(OPENAI_API_KEY, OPENAI_MODEL);
}


