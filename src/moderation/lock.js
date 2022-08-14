const Discord = require('discord.js');
const config = require('../../.json/config.json');
const color = config.color

module.exports = {
    name: 'lock',
    execute(client, message, args){
        message.delete()
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous avez pas les bonne permissions"); //the member has higher perms
        const embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> à lock le salon**`)
        message.channel.send(embed)


    message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
      VIEW_CHANNEL: false,
      SEND_MESSAGES: false
   });
  }
    
    
}