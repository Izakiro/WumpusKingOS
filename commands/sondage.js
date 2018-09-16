const Config = require("../config.js");

module.exports={
	//crée des sondages
	function:(message,client)=>{
		const isImageUrl=require("is-image-url");
		var cmd=message.content.split(" ");
		if(cmd.length<3){
			message.channel.send("\:speech_balloon: **Syntaxe : /sondage <entries_number> <text> [img_url]**");
			return;
		}
		var entries=cmd[1];
		var sondage=cmd.slice(2);
		var img;
		if(sondage[sondage.length-1].startsWith("http")){
			img=sondage[sondage.length-1];
			sondage.pop();
			sondage=sondage.join(" ");
		}else sondage=sondage.join(" ");
		if(isImageUrl(img)){
			message.guild.channels.find(val=>val.name===Config.poll).send({embed: {
				color: 0x8340A4,
				fields: [{
					name: `Entrées : ${entries}`,
					value: `${sondage} \nRéagissez avec : \:heavy_check_mark:(Oui) ou \:heavy_multiplication_x:(Non).`
				}],
				image: {url: img},
				footer: {text:"© Izakiro - [BOT] King Wumpy 1st"}
			}})
			message.channel.send("\:white_check_mark: **Le sondage a bien été envoyé.**")
		}else if(img===undefined){
			message.guild.channels.find(val=>val.name===Config.poll).send({embed: {
				color: 0x8340A4,
				fields: [{
					name: `Entrées : ${entries}`,
					value: `${sondage} \nRéagissez avec : \:heavy_check_mark:(Oui) ou \:heavy_multiplication_x:(Non).`
				}],
				footer: {text:"© Izakiro - [BOT] King Wumpy 1st"}
			}})
			message.channel.send("\:white_check_mark: **Le sondage a bien été envoyé.**")
		}else message.channel.send("\:warning: **Ceci n'est pas une image** \:warning:")
    }
}