const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Bot Connected");
});

bot.login("NTA4Njg3MDQ4MzIwODc2NTU2.DsC4MA.fdaupjXMXHdtPNlAPeENuxt1-JM");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commmandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour.");
        console.log("Commande Salut effectué !");
    }
});
