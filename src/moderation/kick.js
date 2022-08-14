const Discord = require('discord.js')
const config = require('../../.json/config.json');
const color = config.color

module.exports = {
    name: 'kick',

    execute(client, message, args){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You cannot kick members')
  
        const member = message.mentions.members.first()
        if (!member) return message.reply('Please specify a member for me to kick them')
        let reason = args.slice(1).join(" ");
        if (!reason) reason = 'No Reason Given';
        if (!member.kickable) return message.reply('This member is not kickable')

        const kickembed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle('Member Kick')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kick', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setAuthor(`${client.user.username}`, iconURL="https://cdn.discordapp.com/attachments/949723978757439498/949777344372043818/gazo2.gif")

        .setTimestamp()

        
        
        member.kick(reason).catch(err => console.log(err));
        
        message.channel.send(kickembed);
    }

}