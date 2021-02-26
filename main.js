const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='!';

client.once('ready',()=>{
  console.log('NameBuddy is online')
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(args);
    console.log(message.content);
    if(command === 'changenick'){
      const taggedMember = message.mentions.members.first();
      if (taggedMember === undefined){
        message.channel.send('You didnt tag anyone!');
        return;
      }
      const startnick = message.content.indexOf('=>');
      if (startnick == -1){
        message.channel.send('Sorry expecting a => somewre in the command.');
        return;
      }
      const nickname = message.content.slice(startnick+2);
      if (nickname.length>32){
        message.channel.send('Nickname is too long, the limit is 32 char, your nickname was '.concat(nickname.length).concat(' chars long'));
        return;
      }
      if (nickname.length==0){
        message.channel.send('Nickname was 0 char long, something went wrong.')
        return;
      }
      taggedMember.setNickname(nickname);
      message.channel.send('Changed nickname to: '.concat(nickname));
    } else if (command === 'ping'){
      message.channel.send('pong!');
    }
});

client.login('ODE0NjAxNjU0NjI4MjUzNzQ4.YDgO6Q.O1TJ7Y8gxPtLtND7Ir6U7uX45Lc');
