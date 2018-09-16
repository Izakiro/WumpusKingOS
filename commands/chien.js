const Discord = require("discord.js");

module.exports={
	//envoie un chien aléatoire
	function:async(message,client)=>{
		const dog=require("superagent");
		var {body}=await dog.get("https://random.dog/woof.json");
		var extension=body.url.split(".")[2];
		if(extension==="mp4") chien(message,client);
		var dogPicEmbed=new Discord.RichEmbed()
			.setColor("#8340A4")
			.setTitle("Voici un chien :")
			.setImage(body.url)
			.setFooter("© Izakiro - [BOT] King Wumpy 1st");
		message.channel.send(dogPicEmbed);
    }
}