const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Replies a helpfull message containing this bots current functions"),
    async execute(interaction) {
        await interaction.reply("lättys kii")
    }
}