const Discord = require("discord.js");
const randomPup = require("random-puppy");
const subReddits = ["dankmeme", "meme"]

module.exports.run = async (client, message, args) => {

    if (message.channel.id != "727488241954979886") return;

    const sub = subReddits[Math.floor(Math.random() * subReddits.length)];
    const meme = await randomPup(sub);

    const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(meme)
        .setTitle(`MEME`)
        .setFooter(`/r/${sub}`);

    message.channel.send(memeEmbed);
}

module.exports.help = {
    name: "meme"
}