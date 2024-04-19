const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) 
{
  const candidateName = "NomDuCandidat";
  const jobTitle = "TitreDuPoste";
  const experienceYears = 5;
  const skills = ["Compétence1", "Compétence2", "Compétence3"];

  groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Génère Une documentation sur resultat = phraseLavoisier(sujet, verbe, complement, contexte); prompt généré par une intelligence artificielle 🦉_pi"
},
      {
        role: "assistant",
        content: `Bonjour, je suis ${candidateName}, un candidat pour le poste de ${jobTitle}. J'ai ${experienceYears} ans d'expérience et je suis compétent en ${skills.join(", ")}.`
}
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
  });
}

main();
