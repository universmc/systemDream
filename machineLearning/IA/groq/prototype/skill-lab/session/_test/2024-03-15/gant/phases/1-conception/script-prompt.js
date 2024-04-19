const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: 'Configuration de l environnement de développement: décrire l installation et la configuration d un environnement de développement JavaScript moderne, y compris les outils tels que npm, Git et les éditeurs de code.' }],
    model: 'mixtral-8x7b-32768',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();
