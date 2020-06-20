const Discord = require("discord.js");
const fs = require("fs");
const cmds = require("./commands.json");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return;
    if (!args[1]) return;

    if (cmds[args[0]]) return message.reply("this command already exists!");
    cmds[args[0]] = message.content.slice(10 + args[0].length);

    fs.writeFileSync('./commands.json', JSON.stringify(cmds));

}

module.exports.help = {
    name: "addcommand"
}