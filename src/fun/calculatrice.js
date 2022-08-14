const Discord = require('discord.js');

module.exports = {
    name: 'calculatrice',

    execute(client, message, args){
        if(!args[0]) {
            const calculatorError = new Discord.MessageEmbed()
            .setDescription(`Please specify a question`)
            .setColor('RANDOM')

            return message.channel.send(calculatorError)
        }

        let result;

        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"))
        } catch (error) {
            return message.channel.send(`Invalid Calculation`)
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor(`Calculator`, client.user.displayAvatarURL())
        .addField(`Question`, `\`\`\`js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
        .addField(`Answer`, `\`\`\`js\n${result}\`\`\``)
        .setColor("RANDOM")

        message.channel.send(embed)
    }
}