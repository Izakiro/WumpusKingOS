const Config = require("../config.js");

module.exports={
	//envoyer image embed
	function:(message,client)=>{
		if(message.member.roles.find(val=>val.name===Config.adminRank)){
			const isImageUrl=require("is-image-url");
			var cmd=message.content.split(" ");
			if(cmd.length<2){
				message.channel.send("\:speech_balloon: **Syntaxe : /sendimage <url>**");
				return;
			}
			var img=cmd[1];
			if(isImageUrl(img)){
				message.channel.send({
					"embed":{
						"color":0x8340A4,
						"image":{"url":img},
						"footer":{"text":"© Izakiro - [BOT] King Wumpy 1st"}
					}
				});
				return;
			}
			message.channel.send("\:warning: **Ceci n'est pas une image.** \:warning:")
		}else message.channel.send(`\:no_entry: **Vous n'avez pas la permission de faire cela.** \:no_entry:`);
    }
}