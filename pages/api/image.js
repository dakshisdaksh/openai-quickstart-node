const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default async function (req, res) {
    // const completion = await openai.createCompletion({
    //   model: "text-davinci-002",
    //   prompt: generatePrompt(req.body.animal),
    //   temperature: 0.6,
    // });
    // res.status(200).json({ result: completion.data.choices[0].text });

    const imageURL = await openai.createImage({
        prompt: generatePrompt(req.body.animal),
        n: 1,
        size: "1024x1024",
      });
      image_url = response.data.data[0].url;
        res.status(200).json({ result: image_url });

  }
  
  function generatePrompt(animal) {
    const capitalizedAnimal =animal;
    return `${capitalizedAnimal}`;
  }
  



