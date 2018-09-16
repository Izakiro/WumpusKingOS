const Discord = require("discord.js");

module.exports={
	//envoie des boobs aléatoires
	function:async(message,client)=>{
		const boobs=require("superagent");
		var {body}=await boobs.get("http://api.oboobs.ru/boobs/0/1/random");
		if(message.channel.nsfw){
			var boobsPicEmbed=new Discord.RichEmbed()
				.setColor("#8340A4")
				.setTitle("Voici des boobs :")
				.setImage("http://media.oboobs.ru/"+body[0].preview)
				.setFooter("© Izakiro - [BOT] King Wumpy 1st");
			message.channel.send(boobsPicEmbed);
		}else message.channel.send("\:underage: **Pas ici, voyons.**")
    }
}