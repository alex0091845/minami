import DiscordJS, { Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

import advice from "./rest apis/adviceSlip/advice";
import bs from "./rest apis/corporateBS/bs something";
import uselessFact from "./rest apis/uselessfacts/random";
import trending from "./rest apis/kitsuAPI/trending";

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Minami online o7");
});

// no args commands
client.on("messageCreate", async (message) => {
  let content;

  switch (message.content) {
    case "ping":
      content = "pong";
      break;
    case "help":
      content = `no ${message.author.username}.  :joy:`;
      break;
    case "trending":
      content = await trending();
      break;
    case "advice":
      content = await advice();
      break;
    case "bs something":
      content = await bs();
      break;
    case "random":
      content = await uselessFact();
  }
  if (content) message.reply({ content });
});

// commands with args
// TODO decide on command prefix

client.login(process.env.TOKEN);
