const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Family-Komutlar**]`)
  .addField(`**:hammer_pick: Eğlence :hammer_pick: **`,`:gear: \`fd!duello\` = arkadaşlarınızla 1vs1 atarsınız. \n :gear: \`fd!espri\` = soguk espri yapar.\n :gear: \`fd!kedigif\` = Resimli gif  Atar. \n :gear: \`fd!kral-ol\` = kralol  Giftti Atar. \n :gear: \`fd!efkar-ölçer\` = Efkarlarınızı Ölçer. \n :gear: \`fd!tutuklandın\` = Hapishane Resminizi Atar.\n :gear: \`fd!kafasına-sık\` = kafasına sık  Resminizi Atar.\n :gear: \`fd!tokat-at\` = kişiye tokat Atar.

`)
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
  name: 'eğlence',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//Family Discord