const Discord = require('discord.js');
const util = require('./utils.json')
const config = require('../../.json/config.json');
const color = config.color

module.exports = {
    name: 'sayembed',

    execute(client, message , args){
        message.delete()
        if(!message.member.hasPermission('MANAGE_MESSAGES'))return message.reply('Vous avez pas les permission')

        const SayMessage = message.content.slice(9).trim();
        if(!SayMessage) return message.reply('ERROR')
        const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setDescription(SayMessage)
        .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())

        
        message.channel.send(embed)
    }
}