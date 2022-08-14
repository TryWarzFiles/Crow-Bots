const Discord = require('discord.js')
const config = require('../../.json/config.json');
const color = config.color
module.exports = {
    name : 'downclient',

    execute(client, message, args){


        if(message.author.id !== config.OwnerID) return false;

        const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(`${client.user.username}`, iconURL="https://cdn.discordapp.com/attachments/949723978757439498/949777344372043818/gazo2.gif")
        .setDescription(`**${client.user.username} à était éteint avec succès <a:891286638909616158:950474166786740294> **`)
        message.channel.send(embed)
        
            setTimeout(function(){
      
                client.destroy()
      
            }, 50000);
        

        



    }

}