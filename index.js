const Discord = require("discord.js");
const fs = require("fs");

const client = new Discord.Client(); 
const config = require("./config.json");

client.commands = new Discord.Collection();

const customCommands = require("./commands/commands.json");

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) return console.log("No commands active.");

    jsFiles.forEach((f, i) => {
        var file = require(`./commands/${f}`);
        console.log(`Command ${f} has been loaded.`);
        client.commands.set(file.help.name, file);
    });

});

client.on("ready", async () => {
    client.user.setActivity(`the lazy llama's`, {type: "WATCHING"}); 
});

client.on('message', async message => {
    if (message.author.bot || message.channel.type === "dm") return;
    var msgArray = message.content.split(" ");
    var cmd = msgArray[0];
    var args = msgArray.slice(1);

    var command = client.commands.get(cmd.slice(config.prefix.length));
    if (command) return command.run(client, message, args);

    if (customCommands[cmd]) message.reply(customCommands[cmd]);
});

client.login(process.env.token);