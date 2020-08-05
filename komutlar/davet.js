const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`<a:694276549737840690:698617667124199485>${client.user.username} Davet Menüsü <a:694276549737840690:698617667124199485> `)
        .setDescription(`:white_small_square:**Botun Davet Linki İçin** [TIKLA](https://discord.com/api/oauth2/authorize?client_id=731866710403055658&permissions=0&scope=bot) \n:white_small_square:**Destek Sunucusu İçin** [TIKLA](hhttps://discord.gg/2d3d4Z3)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
//Family Discord