import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest 5 product names for a generative AI company that generates names of a product which helps people earn a lot of money.
  Product Type: Stocks
  Product name: Smallcase, Liquide, Stratzy, Navi
  Product Type: Crypto
  Product name: Coinigy, Dogecoin, Flippy, Cryptocase
  Product Type: ${capitalizedAnimal}
  `;
}
