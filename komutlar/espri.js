const Discord = require("discord.js");
 
exports.run = async (client, message, bot) => {
 
  // Espri örneği:
  // " \n Espri \n",
  const espriler = ["**   Bol Etli Makarna Böyle Yapılır  -M@K@RN@-** \n  \n  ",
                   "**   Polis yurtdışına kaçak insan taşıyan kamyon şoförüne sorar.   -Ne var kamyonda?   Şoför:Mal var der.  Bunun üzerine kacakcilardan biri kafasını kamyondan çıkarıp sorar:-Kime mal diyorsun sen?   Polis:Hani mal vardı kamyonda?    Şoför:Eee mal olmasa kafasını çıkarır mı ? ** \n  \n ",
                   "**   Dün hastaneye gittim. Filmimi çektiler. Doktora hangi kanalda oynayacağım dedim. Doktor beni oksijen tipiyle kovaladı ** \n  \n  ",
                   "**   1 yıldır Türkiye'de yaşayan Amerikalı arkadaşım merakla sordu: - Abi sizde neden hapşıran birisi kendisine çok yaşa dendikten sonra ; send a girl diye karşılık veriyor?** \n  \n  ",
                   "**   Adamın biri varmış, ikinci dönem düzeltmiş ** \n  \n ",
                   "**   Adamın biri omoyla yıkanmış maymuna dönmüş neden? Omoyla her şey ilk günkü gibi ** \n  \n  ",
                   "**   Annem sinirlendiğinde  -senin de aynı senin gibi bir çocuğun olsun bak gör-  diyor. Torunu olunca ona vereceğim ona o bakacak haberi yok, canım benim ** \n  \n  ",
                   "**   Babama bilgisayarimi yeniletmesini söyledim. Babama teşekkür getir yeniletiyim söz dedi. Sonra teşekkür getirdim tatilde. F5 e bastı döndü ve gitti. ** \n  \n ",
                   "**   -Sema sen gittikçe güzelleşiyorsun -Aaa gerçekten mi -Evet evet hadi biraz daha uzaklaş** \n  \n  ",
                   "**   -Adın ne ? -Gözde Su senin? -Burunda Sümük** \n  \n  ",
                   "**   Korkunun ecele faydası yoktur,sadece iç çamaşırları kirletir...** \n  \n ",
                   "**   Röntgen Filmi çektirdik, yakında sinemalarda.** \n  \n  ",
                   "**   Hava korsanı uçağı kaçıracaktı ama yapamadı çünkü uçağı kaçırdı.** \n  \n  ",
                   "**   Mafya babası olmak için oğlumun adını Mafya koydum.** \n  \n ",
                   "**   Adamın tekinin kalbi çalışmıyormuş neden? - Çünkü taş kalpliymiş** \n  \n  ",
                   "**   Fransız ihtilali neye karşı yapılmıştır? - Sabaha karşı** \n  \n  ",
                   "**   Şeytan kapıyı nasıl çalar? - Din den dön!** \n  \n ",
                   "**   Yıkanan ton balığına ne denir? - Washington** \n  \n  ",
                   "**   Her şeyi bilen ördeklere ne denir?  Blendax** \n  \n  ",
                   "**   Patlıcan balona bir gün ne demiş? Bir gün sen de patlıcan.** \n  \n ",
                   "**   Çalmak fiilinin gelecek zamanı nedir ? Hapse girmek.** \n  \n  ",
                   "**   Adamın kafası atmış bacakları eşek** \n  \n  ",
                   "**   Adamın biri DONmuş Karısıda Atlet** \n  \n ",
                   "**   Rıdvan'ın bi büyüğü kimdir? Rıdtwo** \n  \n  ",
                   
                   
                   
                   
                   ];
  var yanıt = espriler[Math.floor(Math.random() * espriler.length)];
  const embed = new Discord.RichEmbed()
    .setFooter(`${message.author.tag}, İnşallah Bu Espriden Sonra Kusmazsın :)  :)`, message.author.avatarURL)
    .setColor("#e29811")
 
    .setDescription(
      `${yanıt}`
    )
    ;
 
  message.channel.send(embed).then(msg => msg.delete(30 *1000));
message.delete();
  }
 
exports.conf = {
  aliases: ["espri","espiri","espriyap","espri-yap"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
exports.help = {
  name: "espri",
  category: "kullanıcı",
  description: "rastgele espri atar.",
  usage: "espri"
};