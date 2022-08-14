const Discord = require('discord.js');
const config = require('../../.json/config.json');
const color = config.color

module.exports = {
    name: 'info-server',
    execute(client, message, args){
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            const forcebanError = new Discord.MessageEmbed()
                .setDescription(`Vous avez pas les permission`)
                .setColor("RED")

            return message.channel.send(forcebanError)
        }

        let userID = args[0];
        let reason = args.slice(1).join(" ") || 'Not Specified'

        if (!userID) {
            const forcebanError2 = new Discord.MessageEmbed()
                .setDescription(`ID non valide`)
                .setColor("RANDOM")

            return message.channel.send(forcebanError2)
        }
        if (isNaN(args[0])) {
            const forcebanError3 = new Discord.MessageEmbed()
                .setDescription(`ID non valide`)
                .setColor("RANDOM")

            return message.channel.send(forcebanError3)
        }
        if (userID === message.author.id) {
            const forcebanError4 = new Discord.MessageEmbed()
                .setDescription(`ERROR`)
                .setColor("RANDOM")
            return message.channel.send(forcebanError4)
        }
        if (userID === client.user.id) {
            const forcebanError5 = new Discord.MessageEmbed()
                .setDescription(`ERROR`)
                .setColor("RANDOM")
            return message.channel.send(forcebanError5)
        }

        if (message.guild.member(userID)) {
            const forcebanError6 = new Discord.MessageEmbed()
                .setDescription(`ERROR`)
                .setColor("RANDOM")
            return message.channel.send(forcebanError6)
        }

        client.users.fetch(userID).then(async user => {
            await message.guild.members.ban(user.id, { reason: reason })
            const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Member Banned')
            .setThumbnail(member.user.displayAvatarURL())
            .addField('User Banned ' + user.tag)
            .addField('Kicked by', message.author)
            .addField('Reason', reason)
            .setFooter('Time kicked', client.user.displayAvatarURL())
            .setAuthor(`${client.user.username}`, iconURL="https://cdn.discordapp.com/attachments/949723978757439498/949777344372043818/gazo2.gif")

        .setTimestamp()

            return message.channel.send(embed)
        }).catch(error => {
            const errorEmbed = new Discord.MessageEmbed()
            .setDescription(error)
            .setColor("RANDOM")
            return message.channel.send(errorEmbed)
        })

    }
}