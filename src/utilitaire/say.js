const Discord = require('discord.js');
const util = require('./utils.json')


module.exports = {
    name: 'say',

    execute(client, message , args){
        message.delete()
        if(!message.member.hasPermission('MANAGE_MESSAGES'))return message.reply('Vous avez pas les permission')

        const SayMessage = message.content.slice(5).trim();
        if(!SayMessage) return message.reply('ERROR')
        message.channel.send(SayMessage)
    }
}