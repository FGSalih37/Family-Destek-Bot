	const Discord = require('discord.js')
exports.run = async(client, message) =>  {
  
  const sa = new Discord.RichEmbed()
.setAuthor(`${client.user.username} Linkler`, client.user.avatarURL)
.setDescription('[Beni Davet Et](https://discord.com/api/oauth2/authorize?client_id=731866710403055658&permissions=0&scope=bot) \n [Destek Sunucuma Katıl](https://discord.gg/t9aKSVR)  \n [Web Sitemiz](https://gabby-peridot-whitefish.glitch.me/)')
  .setThumbnail(client.user.avatarURL)
  return message.channel.send(sa)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
  name: "davet"
}