const configsAI = require('../configs/openAI')
const {Configuration, OpenAIApi} = require("openai");
module.exports = {
  askAQuestion: async () => {
    let configuration = new Configuration({
      apiKey: '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',
    });
    let openai = new OpenAIApi(configuration);

    let completion = await openai.createChatCompletion({
      messages: [
        {
          "role": "user",
          "content":
            "Write me the names of the main chapters of the fiction book on the topic: \"The Adventures of Captain Jack Sparrow with 5 chapters"
        }
      ],
      model: "gpt-3.5-turbo",
    });

    const result = completion.data.choices[0].message.content.split('\n').map(item => item = {
      id: item.split('.')[0],
      title: item.split('.')[1]
    })

    console.log(result);
    const text  = []
    return result
    // return text
  }
}

