const Config = require("../config.js");

module.exports={
	//supression d'un rôle
	function:(message,client)=>{
		if(message.content.startsWith("/remrole ")){
			var role=message.content.substring(9,message.content.length);
			if(role.startsWith(Config.adminRank)||role.startsWith(Config.welcomeRank)) message.channel.send("\:warning: **Vous ne pouvez pas supprimer ce rôle.** \:warning:");
			else if(message.member.roles.find(val=>val.name===role)){
				message.member.removeRole(message.guild.roles.find(val=>val.name===role).id);
				message.channel.send("\:white_check_mark: **Vous avez bien perdu le rôle "+role+".**");
			}else message.channel.send("\:warning: **Vous n'avez pas ce rôle ou il n'existe pas.** \:warning:");
		}else message.channel.send("\:speech_balloon: **Syntaxe /remrole <role>**");
    }
}