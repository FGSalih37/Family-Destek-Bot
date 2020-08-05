const Discord = require("discord.js");
module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`∾ Salih#0951`, `! 𝐁𝐆𝐊 ✯ MehmetErdn (0.3k)#4416`,)
.setFooter(client.user.username, client.user.avatarURL)
  message.channel.send(embed);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};
module.exports.help = {
  name: "yapımcılar",
  description: "yapımcılar",
  usage: "yapımcılar"
};