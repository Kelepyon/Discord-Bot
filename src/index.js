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
    msg.reply("muka lu kek kontol!");
  }
  if (msg.content === "bot kontol") {
    msg.reply("dih sok kuat lu anjer");
  }

  switch (msg.content) {
    case "Iyas":
      msg.channel.send("Nunggu Iyas Bugil ;)");
      break;
    case "Rizki":
      msg.channel.send("Udah Cina Kacamata Pula!");
      break;
    case "Wawan":
      msg.channel.send("Robot bisa apa?");
      break;
    case "Kevin":
      msg.channel.send("Pengocok Handal");
      break;
    case "Rasyid":
      msg.channel.send("Pemburu anak kecil");
      break;
    case "Radit":
      msg.channel.send("Crossdress Dit :)");
  }
});

client.login(process.env.TOKEN);
