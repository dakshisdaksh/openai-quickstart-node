const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req,res) {
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: generatePrompt(req.body.prompt),
        temperature: 0.3,
        max_tokens: 150,
        // top_p: 1.0,
        // frequency_penalty: 0.0,
        // presence_penalty: 0.0,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(prompt) {
    const capitalizedPrompt = prompt;
    return `${capitalizedPrompt}`;
}