const Discord = require('discord.js');

 exports.run = (client, message) => {

   
message.channel.send(`Tagımız : ∾`)
       
 };

 exports.conf = {
 enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tag"
};