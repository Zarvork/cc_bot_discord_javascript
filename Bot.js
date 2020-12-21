const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", function (){
	console.log("Carapuce est dans la place !");
});
bot.on("message", message => {
 //on regarde alors si le contenu du message est strictement égale à "!ping"
 if (message.content === "!ping") {
 //si oui on arrive ici et on envoie, dans le channel d'où provient le message, "Carapong !"
 message.channel.send("Carapong !");
 }
 if (message.content === "!carabonjour") {
 message.reply("carabonjour à toi !");
 message.react("😄");
 message.react(bot.emojis.cache.get("790579087542321163"));
}
if (message.content.startsWith("!pin")) {
 message.pin();
}
if (message.content === "!carahelp") {
 message.channel.send({
 embed: {
 color: 3447003,
 description: "__**Les différentes commandes**__",
 fields: [
 {
 name: "!carahelp",
 value: "Pour afficher cette aide."
 },
 {
 name: "!ping",
 value: "Carapong !"
 },
 {
	 name: "!carabonjour",
	 value: "carabonjour à toi !",
 }
 ]
 }
 });
}
if (message.content === "!emojiliste") {
 const emojiliste = message.guild.emojis.cache.map((e) => e.toString() + " => " + ":" +e.name + ":");
 message.channel.send(emojiliste);
}
if (message.content == "!caraquiz") {
	 message.channel.send("Nous allons jouer a un caraquiz !\nPour répondre il te suffira de donner la lettre correspondante a la réponse que tu aura choisi" + " " + bot.emojis.cache.get("790586256647127040").toString()).then(addreact => {addreact.react(bot.emojis.cache.get("790586256647127040").toString());});
	
	 
}

});
bot.login("NzkwNTY2NDA0MDQ2MTkyNjQx.X-CeVg.KMeFEqyCIfING2ddivamiSDoEW4");