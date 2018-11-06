const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd' , member => {
const room = client.channel.get("508838387449593879")
room.send("**Welcome To # -  Universe Town " :champagne_glass: ** "+member)
});

client.login(process.env.BOT_TOKEN);
