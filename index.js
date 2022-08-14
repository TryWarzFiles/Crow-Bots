// Discord Module
const Discord = require('discord.js');
const disbut = require('discord-buttons');
const welcome = require('./src/event/welcome')
const fs = require('fs')
const { MusicBot } = require('discord-music-system'); // Require the best package ever created on NPM (= require discord-music-system)



// Client
const client = new Discord.Client()
disbut(client);

// .JSON
const config = require('./json/config.json');
const console = require('console');
// Color
const vert = config.color
const Thumbnail = config.setThumbnail
// Ready
client.on('ready', () => {
    console.log('----- CroWBots -----')
    console.log(`Version : ${config.version}`)
    console.log(`Prefix : ${config.prefix}`)
    console.log(`Token : ${config.token}`)
    console.log('--------------------')
    console.log('\u001b[1;34m' + client.user.username)
    welcome(client);
    client.user.setPresence({
        status : "online",

        activity: {
            name: `${config.prefix}help`,
            type : 'LISTENING',
            url : "https://discord.gg/feH7VGWQYu",
            
            

        }
    })
})

                                                                     
                                                                             
// Help                                                              
client.on('message', msg =>{
    if(msg.content == config.prefix + 'help'){
        //Embed Help
        const embed = new Discord.MessageEmbed()
        .setColor(vert)
        .setTitle(`Menu d'aide de ${client.user.username}`)
        .setDescription('Choisissez une option dans le menu ci-dessous !')
        .addField('__Categories :__ \n','\n >>> **⚙️ ➜ CONFIGURATION \n 🚨 ➜ MODÉRATION \n 🔧 ➜ UTILITAIRE \n 🎶 ➜ MUSIC \n 🤖 ➜ BOT \n 💻 ➜ DEV** \n \n __**Lien**__ \n \n <:906759666741162025:949809383099998219> [Documentation](https://discord.com/) \n <:900242477842317312:949809263239397396> [Server Support](https://discord.gg/feH7VGWQYu) \n <:906241404529950730:949809285435625492> [Invite me](https://discord.com/api/oauth2/authorize?client_id=929806636351119440&permissions=8&scope=bot)')
        .setThumbnail(url=Thumbnail)
        //Button Help
        const button1 = new disbut.MessageButton()
        .setLabel('⚙️')
        .setStyle('green')
        .setID('1')
        

        const button2 = new disbut.MessageButton()
        .setLabel('🚨')
        .setStyle('green')
        .setID('2')

        const button3 = new disbut.MessageButton()
        .setLabel('🔧')
        .setStyle('green')
        .setID('3')

        const button4 = new disbut.MessageButton()
        .setLabel('🎶')
        .setStyle('green')
        .setID('4')

        const button5 = new disbut.MessageButton()
        .setLabel('🤖')
        .setStyle('green')
        .setID('5')

        const button6 = new disbut.MessageButton()
        .setLabel('💻')
        .setStyle('green')
        .setID('6')
        
        
        

        msg.channel.send('Hello', {
            button : [button1, button2 ,button3 ,button4 ,button5],
            embed : embed
        })
        


    }
    if(msg.content == config.prefix + 'help owner'){
      if(msg.author.id !== config.OwnerID) return false;
      const embed = new Discord.MessageEmbed()
      .setColor(vert)
      .setTitle('Commandes Owners')
      .setDescription('Si vous avez un problème avec une commande, vous pouvez toujours vous diriger vers le support.')
      .addField('__Outils Owners__','<a:891286638909616158:950474166786740294>  | `restart` - restart bot \n <a:891286638909616158:950474166786740294> | `downclient` - Down bot \n <a:891286638909616158:950474166786740294> | `add-owner` - Add Owners \n <a:891286638909616158:950474166786740294> | `Detail-Owners` - Detail Bot \n <a:891286638909616158:950474166786740294> | `node` - Node Panel \n <a:891286638909616158:950474166786740294> | `eval` ')
      msg.channel.send(embed) 
      

    }
    
})

client.on('clickButton', async (button) => {
    if(button.id === "1"){
      await button.reply.defer()
      button.message.delete();
      const embed = new Discord.MessageEmbed()
      .setColor(vert)
      .setTitle('Commandes Configuration')
      .setDescription('Si vous avez un problème avec une commande, vous pouvez toujours vous diriger vers le support.')
      .addField('__Outils Configuration__', '<a:891286638909616158:950474166786740294> | `setup`')

      const button1 = new disbut.MessageButton()
        .setLabel('⚙️')
        .setStyle('green')
        .setID('1')
        

        const button2 = new disbut.MessageButton()
        .setLabel('🚨')
        .setStyle('green')
        .setID('2')

        const button3 = new disbut.MessageButton()
        .setLabel('🔧')
        .setStyle('green')
        .setID('3')

        const button4 = new disbut.MessageButton()
        .setLabel('🎶')
        .setStyle('green')
        .setID('4')

        const button5 = new disbut.MessageButton()
        .setLabel('🤖')
        .setStyle('green')
        .setID('5')

        const button6 = new disbut.MessageButton()
        .setLabel('💻')
        .setStyle('green')
        .setID('6')

      button.message.channel.send("",{
          button : [button1, button2 ,button3 ,button4 ,button5],
          embed : embed
          
          
      })
    }
    if(button.id === "2"){
        await button.reply.defer()
        button.message.delete();
        const embed = new Discord.MessageEmbed()
        .setColor(vert)
        .setTitle('Commande Modération')
        .setDescription('Si vous avez un problème avec une commande, vous pouvez toujours vous diriger vers le support.')
        .addField('__Outils Modération__','<a:891286638909616158:950474166786740294> | `ban` - Ban User \n <a:891286638909616158:950474166786740294> | `kick` - kick User \n <a:891286638909616158:950474166786740294> | `unban` - Unban User \n <a:891286638909616158:950474166786740294> | `kick` - Kick User \n  <a:891286638909616158:950474166786740294> | `mute` - Mute User \n <a:891286638909616158:950474166786740294> | `unmute` - Unmute User \n <a:891286638909616158:950474166786740294> | `clear` - Clear Message \n <a:891286638909616158:950474166786740294> | `nuke` - Nuke Channel \n <a:891286638909616158:950474166786740294> | `lock` - Lock Channel \n <a:891286638909616158:950474166786740294> | `unlock` - Unlock Channel')

        const button1 = new disbut.MessageButton()
        .setLabel('⚙️')
        .setStyle('green')
        .setID('1')
        

        const button2 = new disbut.MessageButton()
        .setLabel('🚨')
        .setStyle('green')
        .setID('2')

        const button3 = new disbut.MessageButton()
        .setLabel('🔧')
        .setStyle('green')
        .setID('3')

        const button4 = new disbut.MessageButton()
        .setLabel('🎶')
        .setStyle('green')
        .setID('4')

        const button5 = new disbut.MessageButton()
        .setLabel('🤖')
        .setStyle('green')
        .setID('5')

        const button6 = new disbut.MessageButton()
        .setLabel('💻')
        .setStyle('green')
        .setID('6')

        button.message.channel.send("",{
            button : [button1, button2 ,button3 ,button4 ,button5],
            embed : embed
            
            
        })

    

    }
    if(button.id === "3"){
        await button.reply.defer()
        button.message.delete();
        const embed = new Discord.MessageEmbed()
        .setColor(vert)
        .setTitle('Commande Utilitaire')
        .setDescription('Si vous avez un problème avec une commande, vous pouvez toujours vous diriger vers le support.')
        .addField('__Outils Utilitaire__','<a:891286638909616158:950474166786740294> | `roles` - Give Role \n <a:891286638909616158:950474166786740294> | `dm` - Dm User \n <a:891286638909616158:950474166786740294> | `server-info` - Information Server \n <a:891286638909616158:950474166786740294> | `info-user` - Imformation User \n <a:891286638909616158:950474166786740294> | `avatar` - Avatar User \n <a:891286638909616158:950474166786740294> | `say` - Say Text \n <a:891286638909616158:950474166786740294> | `sayembed` - Say Embed \n <a:891286638909616158:950474166786740294> | `addemoji` - Add Emoji')

        const button1 = new disbut.MessageButton()
        .setLabel('⚙️')
        .setStyle('green')
        .setID('1')
        

        const button2 = new disbut.MessageButton()
        .setLabel('🚨')
        .setStyle('green')
        .setID('2')

        const button3 = new disbut.MessageButton()
        .setLabel('🔧')
        .setStyle('green')
        .setID('3')

        const button4 = new disbut.MessageButton()
        .setLabel('🎶')
        .setStyle('green')
        .setID('4')

        const button5 = new disbut.MessageButton()
        .setLabel('🤖')
        .setStyle('green')
        .setID('5')

        const button6 = new disbut.MessageButton()
        .setLabel('💻')
        .setStyle('green')
        .setID('6')

        button.message.channel.send("",{
            button : [button1, button2 ,button3 ,button4 ,button5],
            embed : embed
            
            
        })
    }
    if(button.id === "4"){
        await button.reply.defer()
        button.message.delete();
        const embed = new Discord.MessageEmbed()
        .setColor(vert)
        .setTitle('Commande Music')
        .setDescription('Si vous avez un problème avec une commande, vous pouvez toujours vous diriger vers le support.')
        .addField('__Outils Music__','<a:891286638909616158:950474166786740294> | `play` - Play Music \n <a:891286638909616158:950474166786740294> | `stop` - Stop Music \n <a:891286638909616158:950474166786740294> | `skip` - Skip Music \n <a:891286638909616158:950474166786740294> | `queue` - Queue Music \n <a:891286638909616158:950474166786740294> | `Volume` - Change Volume \n <a:891286638909616158:950474166786740294> | `resume` - Resume Music')

        const button1 = new disbut.MessageButton()
        .setLabel('⚙️')
        .setStyle('green')
        .setID('1')
        

        const button2 = new disbut.MessageButton()
        .setLabel('🚨')
        .setStyle('green')
        .setID('2')

        const button3 = new disbut.MessageButton()
        .setLabel('🔧')
        .setStyle('green')
        .setID('3')

        const button4 = new disbut.MessageButton()
        .setLabel('🎶')
        .setStyle('green')
        .setID('4')

        const button5 = new disbut.MessageButton()
        .setLabel('🤖')
        .setStyle('green')
        .setID('5')

        const button6 = new disbut.MessageButton()
        .setLabel('💻')
        .setStyle('green')
        .setID('6')

        button.message.channel.send("",{
            button : [button1, button2 ,button3 ,button4 ,button5],
            embed : embed
            
            
        })
    }
    if(button.id === "5"){
        await button.reply.defer()
        button.message.delete();
        const embed = new Discord.MessageEmbed()
        .setColor(vert)
        .setTitle('Commande Bot')
        .setDescription('Si vous avez un problème avec une commande, vous pouvez toujours vous diriger vers le support.')
        .addField('__Outils Bot__','<a:891286638909616158:950474166786740294>  | `info-bot` - Infot Bot \n <a:891286638909616158:950474166786740294> | `Ping` - Ms Bot ')

        const button1 = new disbut.MessageButton()
        .setLabel('⚙️')
        .setStyle('green')
        .setID('1')
        

        const button2 = new disbut.MessageButton()
        .setLabel('🚨')
        .setStyle('green')
        .setID('2')

        const button3 = new disbut.MessageButton()
        .setLabel('🔧')
        .setStyle('green')
        .setID('3')

        const button4 = new disbut.MessageButton()
        .setLabel('🎶')
        .setStyle('green')
        .setID('4')

        const button5 = new disbut.MessageButton()
        .setLabel('🤖')
        .setStyle('green')
        .setID('5')

        const button6 = new disbut.MessageButton()
        .setLabel('💻')
        .setStyle('green')
        .setID('6')

        button.message.channel.send("",{
            button : [button1, button2 ,button3 ,button4 ,button5],
            embed : embed
            
            
        })
    }
  
    

    
})

client.musicBot = new MusicBot(client, {
  ytApiKey: 'AIzaSyBwbf6jCL8t3_cVnq-uMBBBEP8TiSAtxzA',
  prefix: `${config.prefix}`, // Your bot prefix
  language: 'fr' // fr, en, es, pt
});

client.on('message', async message => {
  if(message.author.bot) {
      return;
  };
  client.musicBot.onMessage(message);
});


// All Commands
client.commands = new Discord.Collection()

const moderation = fs.readdirSync('./src/moderation').filter(file => file.endsWith('.js'))
for(const file of moderation){
    const command = require(`./src/moderation/${file}`)
    client.commands.set(command.name, command)
}
client.on('message', async message => {
    if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.substring(config.prefix.length).split(" ");
  const command = args.shift().toLowerCase()
  switch(command){

    case "nuke":
    client.commands.get('nuke').execute(client, message, args);
    break;
    case "ban":
    client.commands.get('ban').execute(client, message , args);
    break;
    case "banid":
    client.commands.get('banid').execute(client, message, args);
    break;
    case "kick":
    client.commands.get('kick').execute(client, message, args);
    break;
    case "clear":
    client.commands.get('clear').execute(client, message, args);
    break;
    case "mute":
    client.commands.get('mute').execute(client, message, args);
    break;
    case "lock":
    client.commands.get('lock').execute(client, message, args);
    break;
    case "unlock":
    client.commands.get('unlock').execute(client, message, args);
    break;
    case "banid":
    client.commands.get('banid').execute(client, message, args);
    break;
    


  }

})




// Utilitaire
client.commands1 = new Discord.Collection()

const utilitaire = fs.readdirSync('./src/utilitaire').filter(file => file.endsWith('.js'))
for(const file of utilitaire){
    const command = require(`./src/utilitaire/${file}`)
    client.commands1.set(command.name, command)
}
client.on('message', async message => {
    if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.substring(config.prefix.length).split(" ");
  const command = args.shift().toLowerCase()
  switch(command){

  
    case "avatar":
    client.commands1.get('avatar').execute(client, message, args);
    break;
    case "dm":
    client.commands1.get('dm').execute(client, message, args);
    break;
    case "say":
    client.commands1.get('say').execute(client, message, args);
    break;
    case "sayembed":
    client.commands1.get('sayembed').execute(client, message, args);
    break;
    case "roles":
    client.commands1.get('roles').execute(client, message, args);
    break;
    case "info-user":
    client.commands1.get('info-user').execute(client, message, args);
    break;
    case "info-server":
    client.commands1.get('info-server').execute(client, message, args);
    break;
    case "addemoji":
    client.commands1.get('addemoji').execute(client, message, args);
    break;
    case "vote":
    client.commands1.get('vote').execute(client, message, args);
    break;
    
    




  }

})


client.commands2 = new Discord.Collection()

const owner = fs.readdirSync('./src/owners').filter(file => file.endsWith('.js'))
for(const file of owner){
    const command = require(`./src/owners/${file}`)
    client.commands2.set(command.name, command)
}
client.on('message', async message => {
    if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.substring(config.prefix.length).split(" ");
  const command = args.shift().toLowerCase()
  switch(command){

  
    case "downclient":
    client.commands2.get('downclient').execute(client, message, args);
    break;
    case "maintenance":
    client.commands2.get('maintenance').execute(client, message, args);
    break;
    case "restart":
    client.commands2.get('restart').execute(client, message , args);
    break;
    case 'eval':
    client.commands2.get('eval').execute(client, message, args);
    break;
   

    
    




  }

})

client.commands3 = new Discord.Collection()

const fun = fs.readdirSync('./src/fun').filter(file => file.endsWith('.js'))
for(const file of fun){
    const command = require(`./src/fun/${file}`)
    client.commands3.set(command.name, command)
}
client.on('message', async message => {
    if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.substring(config.prefix.length).split(" ");
  const command = args.shift().toLowerCase()
  switch(command){

  
    case "calin":
    client.commands3.get('calin').execute(client, message, args);
    break;
    case "calculatrice":
    client.commands3.get('calculatrice').execute(client, message , args);
    break;
    case 'kiss':
    client.commands3.get('kiss').execute(client, message , args);
    break;
    case 'love':
    client.commands3.get('love').execute(client, message, args);
    break;
    
   

    
    




  }

})


client.commands4 = new Discord.Collection()

const configuration = fs.readdirSync('./src/configuration').filter(file => file.endsWith('.js'))
for(const file of configuration){
    const command = require(`./src/configuration/${file}`)
    client.commands4.set(command.name, command)
}
client.on('message', async message => {
    if(!message.content.startsWith(config.prefix)) return;
  const args = message.content.substring(config.prefix.length).split(" ");
  const command = args.shift().toLowerCase()
  switch(command){

  
    case "setup":
    client.commands4.get('setup').execute(client, message, args);
    break;
    
   

    
    




  }

})


client.commandsload0 = new Discord.Collection();
  fs.readdir('./src/configuration', (err, files) => {
    if(err) console.error(err)
    const jsFiles = files.filter(f => f.split('.').pop() === 'js')
    if(jsFiles.length <= 0) {
      console.log('No commands loaded')
      return;
    }
    console.log(`\u001b[1;32m[Commands Loaded] ` + jsFiles.length)

    jsFiles.forEach((f, i) => {
      const props = require('./src/configuration/' + f)
      client.commandsload0.set(f.slice(0, -3), props)
    })
  })

client.commandsload1 = new Discord.Collection();
  fs.readdir('./src/fun', (err, files) => {
    if(err) console.error(err)
    const jsFiles = files.filter(f => f.split('.').pop() === 'js')
    if(jsFiles.length <= 0) {
      console.log('No commands loaded')
      return;
    }
    console.log('[Commands Loaded] ' + jsFiles.length)

    jsFiles.forEach((f, i) => {
      const props = require('./src/fun/' + f)
      client.commandsload1.set(f.slice(0, -3), props)
    })
})

client.commandsload2 = new Discord.Collection();
  fs.readdir('./src/moderation', (err, files) => {
    if(err) console.error(err)
    const jsFiles = files.filter(f => f.split('.').pop() === 'js')
    if(jsFiles.length <= 0) {
      console.log('No commands loaded')
      return;
    }
    console.log('[Commands Loaded] ' + jsFiles.length)

    jsFiles.forEach((f, i) => {
      const props = require('./src/moderation/' + f)
      client.commandsload2.set(f.slice(0, -3), props)
    })
})

client.commandsload3 = new Discord.Collection();
  fs.readdir('./src/owners', (err, files) => {
    if(err) console.error(err)
    const jsFiles = files.filter(f => f.split('.').pop() === 'js')
    if(jsFiles.length <= 0) {
      console.log('No commands loaded')
      return;
    }
    console.log('[Commands Loaded] ' + jsFiles.length)

    jsFiles.forEach((f, i) => {
      const props = require('./src/owners/' + f)
      client.commandsload3.set(f.slice(0, -3), props)
    })
})

client.commandsload4 = new Discord.Collection();
  fs.readdir('./src/utilitaire', (err, files) => {
    if(err) console.error(err)
    const jsFiles = files.filter(f => f.split('.').pop() === 'js')
    if(jsFiles.length <= 0) {
      console.log('No commands loaded')
      return;
    }
    console.log('[Commands Loaded] ' + jsFiles.length)

    jsFiles.forEach((f, i) => {
      const props = require('./src/utilitaire/' + f)
      client.commandsload4.set(f.slice(0, -3), props)
    })
})





client.login(config.token) 
