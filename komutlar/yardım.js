const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Family Discord BOT',`
**fd!moderasyon** : Moderasyon Komutlarını Açar.
**fd!kullanıcı** : Kullanıcı Komutları Açar.
**fd!yeni-komutlar** : Yeni Komutları Açar.
**fd!eğlence** : Kullanıcı Komutları Açar.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
//Family Discord  