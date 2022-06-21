import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("The bot is ready");
});

// no args commands
client.on("messageCreate", (message) => {
  let content;

  switch (message.content) {
    case "ping":
      content = "pong";
      break;
    case "help":
      content = "no. :joy:";
      break;
  }

  if (content) message.reply({ content });
});

// commands with args
// TODO decide on prefix

client.login(process.env.TOKEN);
