const Discord = require('discord.js');
const config = require('../../.json/config.json');
const color = config.color

module.exports = {
    name: "maintenance",
    description: "maintenance Embed",

    execute(client, message, args) {
        if(message.author.bot) return;
        if(message.channel.type == "dm") return;
          if(message.author.id !== config.OwnerID) return false;
          message.delete()
  
        const embed = new Discord.MessageEmbed()
        
        .setColor(color)
        .setTitle(client.user.username + ' Est en Maintenance')
        .setDescription('Nos developper travail sur ' + client.user.username + '  Merci de vouloir patientez')
        message.channel.send(embed)


   


    }
}
