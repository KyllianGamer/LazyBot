const Discord = require("discord.js");
const randomPup = require("random-puppy");

module.exports.run = async (client, message, args) => {

    if (message.channel.id != "727488241954979886") return;

    if(!args[0]) return;
    const post = await randomPup(args[0]);
    if (!post) return;

    const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(post)
        .setTitle(`POST`)
        .setFooter(`/r/${args[0]}`);

    message.channel.send(memeEmbed);
}

module.exports.help = {
    name: "randompost"
}