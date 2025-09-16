const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");
const quotesData = require("../quotes.json")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("random")
        .setDescription("Get a random quote from someone"),

        async execute(interaction) {

        try {

            const keys = Object.keys(quotesData.people);

                const randIndex = Math.floor(Math.random() * keys.length);
                const randKey = keys[randIndex];
                const person = quotesData.people[randKey];
                const quoteList = person.quotes;
                const random = Math.floor(Math.random() * quoteList.length);
                const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
            
            if (person.signature === true) {
                    await interaction.reply(`"${randomQuote}" - ${person.name}`);
                } else {
                    await interaction.reply(randomQuote);
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
