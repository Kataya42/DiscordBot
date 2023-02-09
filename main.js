const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client({intents : [ "GUILDS", "GUILD_MESSAGES" ]})

const mark = " - ";

// prefix to call the bot
const prefix = "!";

client.once("ready", () => { console.log(" bot is online :) "); });

client.on("messageCreate", message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);

  const command = args.shift().toLocaleLowerCase();
  const input = args.slice(-1)[0];

  if (command === "ping") {
    /*
    message.channel.send("pong");
    */
  } else if (command === "quote" && args.length == 1) {
    fs.readFile('staticQuotes.json', 'utf-8', (err, content) => {
      if (err) {
        throw err;
      }

      fs.readFile('quotes.json', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }

        if (message.guild.id == "588550599230881793") {
          var suola = JSON.parse(content);
        } else {
          var suola = JSON.parse(data);
        }

        var name = input.toLocaleLowerCase();
        // Attribute a random quote to gandhi
        if (name === "gandi"){
          var suola = JSON.parse(data);
          const keys = Object.keys(suola["people"]);
          const randIndex = Math.floor(Math.random() * keys.length);
          const randKey = keys[randIndex];
          const name = suola["people"][randKey];
          
          quoteList = name["quotes"];
          const random = Math.floor(Math.random() * quoteList.length);

          if (name["signature"] == true) {
            message.channel.send('"' + quoteList[random] + '"' + mark + "Gandhi")
          } else {
            message.channel.send('"Lättys kii" - Gandhi')
          }

        } else if (suola["people"].hasOwnProperty(name)) {
          // list of quotes by people
          const quoteList = suola["people"][name]["quotes"];
          const random = Math.floor(Math.random() * quoteList.length);

          // should the bot add a signature to the end of the quote or not
          if (suola["people"][name]["signature"] == true) {
            message.channel.send('"' + quoteList[random] + '"' + mark +
                                 suola["people"][name]["name"])
          } else {
            message.channel.send(quoteList[random])
          }
        }

      });
    });
  } else if (command === "random") {
    fs.readFile('quotes.json', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }
      fs.readFile('staticQuotes.json', 'utf-8', (err, content) => {
        if (err) {
          throw err;
        }

        if (message.guild.id == "588550599230881793") {
          var suola = JSON.parse(content);
        } else {
          var suola = JSON.parse(data);
        }
        const keys = Object.keys(suola["people"]);
        const randIndex = Math.floor(Math.random() * keys.length);
        const randKey = keys[randIndex];
        const name = suola["people"][randKey];

        quoteList = name["quotes"];
        const random = Math.floor(Math.random() * quoteList.length);

        if (name["signature"] == true) {
          message.channel.send('"' + quoteList[random] + '"' + mark +
                               name["name"])
        } else {
          message.channel.send(quoteList[random])
        }

      });
    });
  
  } else if (command === "help") {
    message.channel.send("Available commands: \n!quote [name], gives a quote by that person\n!random, gives a random quote");
  };

});

fs.readFile('token.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  // token not included in git due for security reasons
  const token = data.split("\n");
  client.login(token[0]);

});