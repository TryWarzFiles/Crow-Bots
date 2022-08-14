const Discord = require('discord.js');
const moderation = require('./moderations.json')
const config = require('../../.json/config.json');
const color = config.color
const client = new Discord.Client();

module.exports = {
    name: 'nuke',
    execute(client , message, args) {
        if(!message.member.hasPermission('MANAGE_MESSAGES'))return message.reply('Vous avez pas les permission')


        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setDescription(`<@${message.author.id}>** à Nuke le salon**`)
            .setImage(url="https://cdn.discordapp.com/attachments/913162574957277191/913162975551033374/ad0a8b6175439088b1255f769ab44b56.gif")
            .setAuthor(`${client.user.username}`, iconURL="https://cdn.discordapp.com/attachments/949723978757439498/949777344372043818/gazo2.gif")

            channel.send(embed)
        })
        message.channel.delete()
        
    },
};
