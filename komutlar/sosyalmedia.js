const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const codebookxir = new Discord.RichEmbed()
  .setColor('GREEN')
  .setTitle("Sosyal Medya Hesaplarımız")
  .setDescription(`[Botu Davet Et](https://family-discord.forumu.tc/)`)
  .addField("Sosyal Medya Hesapları:", "[Youtube](https://www.youtube.com/channel/UCw6ETQ1IYRqn4ft6P2XaGLw?view_as=subscriber)\n [Discord](https://discord.gg/qw2YXE)\n [İnstagram](https://www.instagram.com/umut.priv_01/)")
  .setFooter(`Sosyal Medyadan Bizi Takip Etmeyi Unutmayın!`)
  message.channel.send(codebookxir)
}
exports.conf = {
  enbaled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "sosyal-medya"
}