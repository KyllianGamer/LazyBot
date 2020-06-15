const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const EmbedOne = new Discord.MessageEmbed()
        .setTitle("**__1__**")
        .setDescription("Be respectful to everyone.                                                        ")
        .setColor("#95de62");
    
    const EmbedTwo = new Discord.MessageEmbed()
        .setTitle("**__2__**")
        .setDescription("Don't promote yourself unless permission granted.                                 ")
        .setColor("#47eded");
    
    const EmbedThree = new Discord.MessageEmbed()
        .setTitle("**__3__**")
        .setDescription("Keep it appropriate.                                                              ")
        .setColor("#f0b94d");

    const EmbedFour = new Discord.MessageEmbed()
        .setTitle("**__4__**")
        .setDescription("Don't spam or annoy people in other ways.                                         ")
        .setColor("#d94ed2");
    
    if (!message.member.hasPermission('MANAGE_ROLES')) return;

    message.channel.send(EmbedOne)
    .then(message.channel.send(EmbedTwo)
    .then(message.channel.send(EmbedThree)
    .then(message.channel.send(EmbedFour))));

}

module.exports.help = {
    name: "inject"
}