import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Minami online o7");
});

// no args commands
client.on("messageCreate", (message) => {
  let content;

  switch (message.content) {
    case "ping":
      content = "pong";
      break;
    case "help":
      content = `no ${message.author.username}.  :joy:`;
      break;
  }

  if (content) message.reply({ content });
});

// commands with args
// TODO decide on prefix

client.login(process.env.TOKEN);
