const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client();
const mark = " - ";

// prefix to call the bot
const prefix = "!";

client.once("ready", () =>{
    console.log(" bot is online :) ");
});



client.on('messageReactionAdd', (reaction, user) => {
    let message = reaction.message, emoji = reaction.emoji;

    if (emoji.name == '😋') {
        message.channel.send("yes");
        reaction.remove(user);
    }

    else if (emoji.name == 'pushpin') {
        
        if (message.pinned){
            message.unpin()
        } else {
            message.pin()
        }
        reaction.remove(user);
        console.log("Pin added by:", user)

    } else {

    }

});

client.on("message",message=>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    
    const command = args.shift().toLocaleLowerCase();
    const input = args.slice(-1)[0];
    
    if( command === "ping"){

        message.channel.send("pong");
    
    } else if( command === "quote" && args.length == 1){

        fs.readFile('quotes.json', 'utf-8', (err, data) => {
            if (err) {
                throw err;
            } 
            var suola = JSON.parse(data);
            var name = input.toLocaleLowerCase();

            if (suola["people"].hasOwnProperty(name)){

                //list of quotes by people
                const quoteList = suola["people"][name]["quotes"];
                const random = Math.floor(Math.random() * quoteList.length);

                // should the bot add a signature to the end of the quote or not
                if(suola["people"][name]["signature"] == true){
                    message.channel.send('"'+quoteList[random]+'"' + mark + suola["people"][name]["name"])
                } else{
                    message.channel.send(quoteList[random])
                }
                

            } 
        });
                
        
    } else if(command === "help"){
        message.channel.send("List of commands: help, quote, hush.\nYou can also react to a message with :pushpin: to pin a message");

    } else if(command === "raidtime"){
        //TO BE IMPLEMENTED
        message.channel.send("");

    } else if(command === "hush"){

            picList = ["./hush2.png", "./hush3.png", "./hush4.png"]
            const random = Math.floor(Math.random() * picList.length);

            message.channel.send('', {
                files: [
                    picList[random]
                ]
            });

    } else{
        //message.channel.send("bork");
        
    }
    
});

fs.readFile('token.txt', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    } 

// token not included in git due for security reasons
const token = data.split("\n");
client.login(token[0]);

});