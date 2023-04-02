require("dotenv").config();
const { REST, Routes } = require("discord.js");

const command = [
  {
    name: "cok",
    description: "Apa Cok!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Proses Mendaftar Perintah. . .");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: command }
    );

    console.log("Perintah Berhasil Dibuat");
  } catch (error) {
    console.log("Ada Masalah Cok!");
  }
})();
