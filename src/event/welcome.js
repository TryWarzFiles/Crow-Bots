module.exports = (client) => {
    client.on('guildMemberAdd', (member) => {
        console.log(member);
        const messagejoin = `Bienvenue <@${member.id}>`
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'joins')
        if (!welcomeChannel) return console.error("The channel does not exist!");
        
        welcomeChannel.send(messagejoin)

        



    });
};