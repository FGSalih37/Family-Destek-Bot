const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Tokat Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setTimestamp()
    .setDescription(`** ${mesaj} ` + ", " + message.author.username + ' Adlı Kişi Sana Tokat Attı Fena Geçirdi Üffff.!**')
    .setImage(`https://media1.tenor.com/images/b980428d9ab96cc24e690ec9b00a783f/tenor.gif?itemid=7205678`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tokat"],
  permLevel: 0
};

exports.help = {
  name: 'tokat-at',
  description: 'İstediğiniz Kişiye Tokat Atarsınız.',
  usage: 'tokat-at'
};