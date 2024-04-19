const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: 'Énumérer les tâches pour la formation asynchrone en JavaScript: 1. Configuration de l\'environnement de développement 2. Session de formation sur les outils et frameworks DevOps 3. Création du prototype de configuration' }],
    model: 'mixtral-8x7b-32768',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();
