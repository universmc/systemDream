const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: 'system', content: 'Test de Compression algorithm: [Run] hashage Encoding (SH256)" to output_file_path /output/.data base64+hashlib ' }],
    model: 'mixtral-8x7b-32768',
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();