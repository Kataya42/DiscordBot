const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");
const quotesData = require("../quotes.json")
const mark = " - ";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("quote")
        .setDescription("Get a random quote from someone")
        .addStringOption(option =>
            option
                .setName("name")
                .setDescription("The name of the person you want a quote from")
                .setRequired(true)
        ),

        async execute(interaction) {
        const nameInput = interaction.options.getString("name").toLowerCase();

        try {
    
            // Gandhi = random quote
            if (nameInput === "gandhi") {

                const keys = Object.keys(quotesData.people);
                const randIndex = Math.floor(Math.random() * keys.length);
                const randKey = keys[randIndex];

                const name = quotesData.people[randKey];
                quoteList = name.quotes;
                const random = Math.floor(Math.random() * quoteList.length);

                if (name.signature == true) {
                    await interaction.reply('"' + quoteList[random] + '"' + mark + "Gandhi")
                } else {
                    await interaction.reply('"lättys kii" - Gandhi')
                }

            } else if (quotesData.people.hasOwnProperty(nameInput)) {

                const person = quotesData.people[nameInput];
                const quoteList = person.quotes;
                const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

                if (person.signature === true) {
                    await interaction.reply(`"${randomQuote}" - ${person.name}`);
                } else {
                    await interaction.reply(randomQuote);
                }
            } else {
                await interaction.reply({
                    content: `Vittu kuka? :D`,
                    ephemeral: true
                });
            }
        } catch (err) {
            console.error(err);
            await interaction.reply({
                content: "jotain meni vituiks, oot änänäksen velkaa",
                ephemeral: true
            });
        }
    }
};