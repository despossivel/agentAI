import OpenAI from 'openai';

export class OpenAi {
    OPENAI: any;
    prompt: string;
    model: string;
 
    constructor(apiKey: string, model: string) {
        this.prompt = ''
        this.OPENAI = new OpenAI({
            apiKey: apiKey,
        });
        this.model = model;
    }

    async GPT4(content: string) {
        const data = await this.OPENAI.chat.completions.create({
            model: this.model,
            messages: [
                {role: "system", content: "You are a useful assistant designed to summarize content"},
                {
                    role: "user",
                    content,
                }
            ],
        }, {
            maxRetries: 5,
        });

        return data?.choices[0]?.message?.content;
    }

    async moderation(prompt: string) {
        try {
 
            const data = await this.OPENAI.moderations.create({
                input: prompt,
            });
            return data?.results[0]
 
        } catch (error: any) {
            return {
                error: true,
                message: error.message,
            };
        }
    }



}