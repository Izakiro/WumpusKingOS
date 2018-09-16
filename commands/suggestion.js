const Config = require("../config.js");

module.exports={
	//permet d'envoyer une suggestion
	function:(message,client)=>{
		var cmd=message.content.split(" ");
		if(cmd.length<2){
			message.channel.send("\:speech_balloon: **Syntaxe : /suggestion <message>**");
			return;
		}
		var msg=cmd.slice(1).join(" ");
		message.guild.channels.find(val=>val.name===Config.suggest).send(msg);
		message.channel.send("\:white_check_mark: **La suggestion a bien été envoyée.**");
    }
}