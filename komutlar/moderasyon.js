const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Family Discord-Komutlar**]`)
  .addField(`**:tada: Moderasyon-Komutları :tada: **`,`:white_small_square: \`fd!otorol\` = Sunucu giriş yapanlara belirlediğiniz rolü verir. \n:white_small_square: \`fd!sayaç\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`fd!ban\` = İstediğiniz kişiyi sunucudan engeller. \n:white_small_square: \`fd!unban\` = Engellediğiniz kişinin engelini kaldırır .\n:white_small_square: \`fd!banlist\` = Engellenmiş kişileri gösterir.\n:white_small_square: \`fd!küfür-engel [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \`fd!reklam-engelleme \` = Reklam Paylaşmasını Engeller.  \n:white_small_square: \`fd!oylama\` = Oylama başlatırsınız. \n:white_small_square: \`fd!slowmode\` = Yavaş Modu Açar. \n:white_small_square: \`fd!sil\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`fd!mute\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz.\n:white_small_square: \`fd!dc\` = Discord daveti oluşturur.\n:white_small_square: \`fd!sunucu-bilgi\` = Sunucu bilgisine ulaşırsınız.\n:white_small_square: \`fd!korona-bilgi\` = korona bilgilerine ulaşabilirsiniz.  `)
return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//Family Destek