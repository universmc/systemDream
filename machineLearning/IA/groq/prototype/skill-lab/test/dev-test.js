const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
  // Utilisez un modèle de phrase différent si nécessaire
const model = 'mixtral-8x7b-32768';

  // Créez votre message d'assistant avec le contenu et le rôle spécifiés
const message = { role: 'assistant', content: 'Ceci est un premier test de completion role:user,content("message")' };

  // Définissez le contenu du modèle que vous souhaitez utiliser pour générer des compléments
const chatCompletion = await groq.chat.completions.create({
    messages: [message],
    model,
  });

  // Générez une suggestion de réponse en fonction du contexte de votre modèle
const suggestion = chatCompletion.choices[0].message.content;

  // Utilisez cette suggestion pour répondre au message d'origine
console.log(suggestion);
}

main();
