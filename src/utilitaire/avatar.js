const Discord = require('discord.js');
const util = require('./utils.json')
const config = require('../../.json/config.json');
const color = config.color

module.exports = {
    name: 'avatar',

    execute(client, message, args){
        const member = message.mentions.members.first()
        if(!member) return message.reply('ERROR')
        const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setImage(member.user.displayAvatarURL())
        .setDescription(`**Voici la photo profil de ${member}**`)
        .setAuthor(`${client.user.username}`, iconURL="https://cdn.discordapp.com/attachments/949723978757439498/949777344372043818/gazo2.gif")

        message.channel.send(embed)

    }
}