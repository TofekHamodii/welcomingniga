const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd' , member => {
const room = client.channel.get("اي دي الروم")
room.send("welcome to Server "+member)
});

client.login(process.env.BOT_TOKEN);
