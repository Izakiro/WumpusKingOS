const Discord = require("discord.js");

module.exports={
	//envoie un cul aléatoire
	function:async(message,client)=>{
		const ass=require("superagent");
		var {body}=await ass.get("http://api.obutts.ru/butts/0/1/random")
		if(message.channel.nsfw){
			var assPicEmbed=new Discord.RichEmbed()
				.setColor("#8340A4")
				.setTitle("Voici un cul :")
				.setImage("http://media.obutts.ru/"+body[0].preview)
				.setFooter("© Izakiro - [BOT] King Wumpy 1st");
			message.channel.send(assPicEmbed);
		}else message.channel.send("\:underage: **Pas ici, voyons.**")
	}
}