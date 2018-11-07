const Discord = require("discord.js");
const client = new Discord.Client();




client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("# -  Universe Town ",{type: 'WATCHING'});
  
  });
  
client.login("NTA3OTc4Mjg4MjUwMDkzNTY4.DsHdrQ.iegZjEFqryYKyt2jdTqut0l0OC0");