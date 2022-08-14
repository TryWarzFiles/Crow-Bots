const config = require('../../.json/config.json')

module.exports = {
    name: 'eval',
    execute(client, message, args){
        if(message.author.id !== config.OwnerID) return false;

        const content = message.content.split(' ').slice(1).join(' ');
        const result = new Promise((resolve) => resolve(eval(content)));

        return result.then((output) => {
            if (typeof output !== 'string') {
                output = require('util').inspect(output, { depth: 0 });
            }
            if (output.includes(client.token)) {
                output = output.replace(message.client.token, 'T0K3N');
            }
            message.channel.send(output, {
                code: 'js'
            });
        }).catch((err) => {
            err = err.toString();
            if (err.includes(message.client.token)) {
                err = err.replace(message.client.token, 'T0K3N');
            }
            message.channel.send(err, {
                code: 'js'
            });
        });
    }
}