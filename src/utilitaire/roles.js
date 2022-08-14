const Discord = require('discord.js');
const config = require('../../.json/config.json');
const color = config.color

module.exports = {
    name: 'roles',

    execute(client, message, args){
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            const noPerms = new Discord.MessageEmbed()
            .setDescription(`You don\'t have permissions to add roles.`)
            .setColor(color)
            return message.channel.send(noPerms)
        }
        
        const member = message.mentions.members.first()
        if(!member) {
            const addroleError = new Discord.MessageEmbed()
            .setDescription(`Personne mal mationné`)
            .setColor(color)
            return message.channel.send(addroleError)
        }
        args.shift()
        let roleToGive = message.mentions.roles.first()
        
        if(!roleToGive) {
            const addroleError2 = new Discord.MessageEmbed()
            .setDescription(`Le rôle n'exite pas`)
            .setColor(color)
            return message.channel.send(addroleError2)
        }
        const mentionedPosition = member.roles.highest.position
        const selfPosition = message.member.roles.highest.position

        if(selfPosition <= mentionedPosition) {
            const posi = new Discord.MessageEmbed()
            .setDescription(`ERROR`)
            .setColor(color)
            return message.channel.send(posi)
        }
        if(member.roles.cache.get(roleToGive.id)) {
            const addroleError3 = new Discord.MessageEmbed()
            .setDescription(`${member} à déjà le role`)
            .setColor("RANDOM")
            return message.channel.send(addroleError3)
        }
        member.roles.add(roleToGive)
        const embed = new Discord.MessageEmbed()
        .setDescription(`Role ${roleToGive} A était ajoutez à ${member}`)
        .setColor(color)

        message.channel.send(embed)

    }
}