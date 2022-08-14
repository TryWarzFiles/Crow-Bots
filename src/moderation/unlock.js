const Discord = require('discord.js');

module.exports = {
    name: 'unlock',
    execute(client, message, args){
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> à unlock le salon**`)

    message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
     });

    message.channel.send(embed)
    }
}