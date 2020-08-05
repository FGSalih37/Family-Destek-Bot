const Discord = require(`discord.js`);
const db = require(`quick.db`)

exports.run = async(client, message, args) => {
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu komutu kullanamazsın.`)
let kişi = message.mentions.users.first()

if(!args[0]) {
const data = await db.fetch(`erkek.${message.author.id}.${message.guild.id}`)
const emb = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`${message.author}, isimli kullanıcı ${data ? data : '0'} erkek kayıt etmiş.`)
message.channel.send(emb) }
if(kişi) {
const data = await db.fetch(`erkek.${kişi.id}.${message.guild.id}`)
const emb = new Discord.RichEmbed()
.setAuthor(kişi.username, kişi.avatarURL)
.setDescription(`${kişi}, isimli kullanıcı ${data ? data : '0'} erkek kayıt etmiş.`)
message.channel.send(emb) }
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0,
};

exports.help = {
 name: 'bilgi'
};