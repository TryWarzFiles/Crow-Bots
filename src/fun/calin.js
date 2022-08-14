const Discord = require('discord.js')

module.exports = {
    name: 'calin',
    execute(client, message, args){
        const member = message.member;

        const kiss = [
            `https://i.pinimg.com/originals/d1/d3/a0/d1d3a02a8356549fcd48796b318d6b58.gif`,
            `https://i.pinimg.com/originals/5c/6c/a6/5c6ca66dbf69a5c5c0881caa275547ed.gif`,
            `https://data.whicdn.com/images/213476418/original.gif`,
            `https://media1.tenor.com/images/56c73f380d3ad747ff0600eb7ea1bbc7/tenor.gif`,
            `https://media2.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif`,
            `https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif`,
            `https://thumbs.gfycat.com/FocusedCoordinatedAlaskajingle-size_restricted.gif`
    ]

   const embed = new Discord.MessageEmbed()
    .setDescription(`**${member.user.username}** a envie d'un calin :heart_eyes:`, message.author.avatarURL)
    .setImage(kiss[Math.floor(Math.random() * kiss.length)])
    .setFooter('Commande faite par ' + member.user.username)
    .setColor("RANDOM")

    message.channel.send(embed);
    }
}