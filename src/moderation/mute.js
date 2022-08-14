const Discord = require('discord.js');
const config = require('../../.json/config.json');
const color = config.color
module.exports = {
    name: "mute",
    execute(client, message, args){
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    var muteRole = message.guild.roles.cache.find(role => role.name.toLowerCase().includes("mute"));
    var muteChannel = message.guild.channels.cache.find(channel => channel.name.includes("modlogs"));
    var muteUser = message.mentions.members.first();
    var muteReason = message.content.slice(config.prefix.length + 27);
    
    
    // Conditions for muting
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous avez pas les bonne permissions"); //the member has higher perms
    if (!muteUser) return message.channel.send("Mal mentionné");
    if (!muteChannel) return message.channel.send("`!setup`");
    if (!muteRole) return message.channel.send("`!setup`");
    if (!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("I Don't have permissions");
    if (!muteReason) muteReason = "No reason given";
    
    // Embed for details of mute
    var muteEmbed = new Discord.MessageEmbed()
    .setColor(color)
    .setAuthor(`${client.user.username}`, iconURL="https://cdn.discordapp.com/attachments/949723978757439498/949777344372043818/gazo2.gif")
    .setThumbnail(member.user.displayAvatarURL())
    .setTitle("Member Mute")
    .addField("Muted user", muteUser)
    .addField('Mute by', message.author)
    .addField("Reason", muteReason)
    .setFooter(`Muted by ${message.author.tag}`)
    .setTimestamp();
    
    
    //Mute
    muteUser.roles.add(muteRole);
    message.channel.send(`${muteUser} à était mute`);
    muteChannel.send(muteEmbed);
     
    
  }

}
