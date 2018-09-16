const Config = require("../config.js");

module.exports={
	//acquisition d'un rôle
	function:(message,client)=>{
		if(message.content.startsWith("/getrole ")){
			var role=message.content.substring(9,message.content.length);
			if(message.guild.roles.find(val=>val.name===role)&&!role.startsWith(Config.adminRank)){
				message.member.addRole(message.guild.roles.find(val=>val.name===role).id);
				message.channel.send("\:white_check_mark: **Vous avez bien reçu le rôle "+role+".**");
			}else message.channel.send("\:warning: **Vous n'avez pas reçu de rôle, celui-ci n'existe pas ou n'est pas disponible.** \:warning:");
		}else message.channel.send("\:speech_balloon: **Syntaxe : /getrole <role>**");
    }
}