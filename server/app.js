import readline from "readline-sync";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

let apiKey = process.env.API;

async function chatBot(userInput) {
  // Using readline sync to ask input in terminal
  //   let fName = readline.question("Enter your Name:  ");

  //   let userInput = readline.question(`Hey ${fName} ! Whats up...`);
  let userInput = readline.question("Enter your Query ");

  console.log(userInput);

  // OpenAI API Call using Axios

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: userInput,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );
  //   console.log(response.data.choices[0].message.content)
  return response.data.choices[0].message.content;
}
// chatBot();

console.log(`ChatGPT is Running ! Type exit to stop`);

while (true) {
  let userInput = readline.question("Enter your query :");

  if (userInput == "exit" || userInput == "bye") {
    console.log("Good Bye ! See you later");
    break;
  }

  const reply = await chatBot(userInput);
  if (reply) {
    console.log(`AI : ${reply}: \n`);
  }
}
