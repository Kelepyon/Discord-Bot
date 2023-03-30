require("dotenv").config();
const { Client, IntentsBitField, Message } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Bot#1 is online!");
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) {
    return;
  }
  if (msg.content === "kontol") {
    msg.reply("muka lu kek kontol!"); //Maaf kasar hehe :)
  }
  if (msg.content === "bot kontol") {
    msg.reply("dih sok kuat lu anjer");
  }

  switch (msg.content) {
    case "selamat pagi":
      msg.reply("Pagi juga sayang ;)");
      break;
    case "pagi":
      msg.reply("Pagi juga sayang :)");
      break;
    case "halo":
      msg.channel.send("Hai ;)");
      break;
    case "dev":
      msg.channel.send("https://github.com/Kelepyon");
      break;
    case "kevin":
      msg.reply("Tunggu dulu sebelum di reply gan :)");
      break;
    case "pin":
      msg.reply("Tunggu dulu sebelum di reply gan :)");
    case "hai sayang":
      msg.reply("iya sayang, kenapa ?");
  }
});

client.login(process.env.TOKEN);
