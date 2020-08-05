const Discord = require('discord.js');


exports.run = function(client, message, args) {
//Komutun Kodları
  
  const user = message.mentions.users.first()
  const reason =args.slice(1).join(' ');
  if(!user) return message.channel.send(':warning: Kimi uyaracağımı etiketlemen gerek')
  if(!reason) return message.channel.send('**Bir sebep yaz**')
  if(!message.member.hasPermission('MESSAGE_MANAGE')) return message.channel.send(':warning: Üzgünüm, Bu işlem için yetkin yok')
  message.delete();
  message.channel.send(':tada: Başarı ile uyardım!').then(m => m.delete(5000))
  user.send(
  new Discord.RichEmbed()
    .setTitle('**Uyarıldın :bangbang:**')
    .setDescription('**'+message.guild.name+' ** adlı sunucudan ** '+reason+'** sebebi ile uyarıldın!')
    .setColor('RED')
  )
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'uyar',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Etiketlediğiniz kişiyi uyarır.',//Komutun Açıklaması
  kategori: 'yetkili',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  usage: 'uyar @Kullanıcı [Sebep]' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}