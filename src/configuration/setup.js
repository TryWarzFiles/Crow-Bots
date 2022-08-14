const Discord = require('discord.js');

module.exports = {
    name: 'setup',

    execute(client, message, args){

        const embed = new Discord.MessageEmbed()
        .setDescription('**Setup Effectuer** <a:891286638909616158:950474166786740294>')

        message.channel.send(embed)
        message.guild.channels.create('joins', {
            type: 'GUILD_TEXT',
            permissionOverwrites: [{
                id: message.guild.id,
                allow: ['VIEW_CHANNEL'],
                deny: ['SEND_MESSAGES'],
            }]
        });

        message.guild.channels.create('modlogs', {
            type: 'GUILD_TEXT',
            permissionOverwrites: [{
                id: message.guild.id,
                allow: ['SEND_MESSAGES'],
                deny: ['VIEW_CHANNEL'],
            }]
        });


        message.guild.roles.create({
            data: {
              name: 'mute',
              color: 'BLUE',
            },
            reason: 'we needed a role for Super Cool People',
          })
            .then(console.log)
            .catch(console.error);

        
 

        
    }
}