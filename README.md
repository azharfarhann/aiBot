# aiBot

This is an AI Bot project repo using axios, readline-sync, and dotenv

It is a simple terminal chatbot built with Node.js that lets you type any question or message and see a GPT-powered reply instantly.
It uses `readline-sync` to read your input, axios to call the OpenAI API, and dotenv to keep your API key safe.
To use it, clone the repo, run npm install in the server/ folder, create a .env file there with API=your_openai_api_key_here, then start the bot with node app.js.
You’ll see “ChatGPT is Running! Type exit to stop.”just type your query, press Enter, and read the response.
Remember to replace your_openai_api_key_here with your actual key and keep that file private.

**Features**

- Send any text prompt and receive an AI-generated response instantly
- Easy “exit” or “bye” commands to stop the bot
- Clear console output for questions and answers

├── README.md
└── server
├── .gitignore
├── app.js
├── package-lock.json
└── package.json
