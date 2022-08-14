const Discord = require('discord.js')
const config = require('../../.json/config.json')


module.exports = {
    name: "love",
    execute(client, message, args){
            if(!message.mentions.members.first()) return message.channel.send(`Please mention someone to calculate the love percentage`).then(message.react('❌'));
            let person = message.mentions.members.first(message, args[0]);
    
            const love = Math.round(Math.random() * 100);
            const loveIndex = Math.floor(love / 10);
            const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
            
            let loveEmbed = new Discord.MessageEmbed()
            .setTitle("Love Percentage")
            .setColor(config.color)
            .setDescription(`${message.author} loves ${person} this much: ${love}%\n\n${loveLevel}`)
            message.channel.send(loveEmbed)
        }
    }
    
