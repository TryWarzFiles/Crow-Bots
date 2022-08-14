const Discord = require('discord.js')
const config = require('../../.json/config.json');
const color = config.color


module.exports = {
    name: "restart",

    

    execute(client, message, args){

        if(message.author.id !== config.OwnerID) return false;

        const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setAuthor(`${client.user.username}`, iconURL="https://cdn.discordapp.com/attachments/949723978757439498/949777344372043818/gazo2.gif")
        .setDescription(`**${client.user.username} à était restart avec succès <a:891286638909616158:950474166786740294> **`)
        message.channel.send(embed)

        client.destroy()

        setTimeout(function(){
      
            
            console.log(client.user.username + "A était restart")
      
        }, 50000);
      

       
    
        client.login(config.token);

        client.user.setPresence({
            status : "online",
    
            activity: {
                name: `${config.prefix}help`,
                type : 'LISTENING',
                url : "https://discord.gg/feH7VGWQYu",
                
                
    
            }
        })


        
        

        

    }
}