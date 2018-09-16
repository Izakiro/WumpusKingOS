const remove=(array,element)=>{
	const index=array.indexOf(element);
	array.splice(index,1);
}
const Config = require("../config.js");

module.exports={
	//supprimer un rôle
	function:(message,client)=>{
		if(message.member.roles.find(val=>val.name===Config.adminRank)){
			var cmd=message.content.split(" ");
			if(cmd.length<2){
				message.channel.send("\:speech_balloon: **Syntaxe : /delrole <role>**");
				return;
			}
			const fs=require("fs");
			var p=-1;
			var data=fs.readFileSync("./roles.wumpy","UTF-8");
                        var roles=data.split("\n");
			var roleName=cmd[1];
			var chanName=roleName.toLowerCase();
			if(message.guild.channels.find(val=>val.name===chanName)){
				message.guild.channels.find(val=>val.name===chanName).delete();
				message.channel.send(`\:white_check_mark: **Vous avez bien supprimé le salon ${chanName}.**`);
			} else message.channel.send("\:warning: **Le canal n'existe pas.** \:warning:");
			if(message.guild.roles.find(val=>val.name===roleName)){
				message.guild.roles.find(val=>val.name===roleName).delete();
				message.channel.send(`\:white_check_mark: **Vous avez bien supprimé le rôle ${roleName}.**`);
			} else message.channel.send("\:warning: **Le rôle n'existe pas.** \:warning:");
			for(var i=0;i<roles.length-1;i++){
				if(roles[i].startsWith(roleName)) p=i;
			}
			if(p==-1) message.channel.send("\:warning: **Ce rôle n'est pas dans la liste.** \:warning:");
			else{
				remove(roles,roles[p]);
				fs.writeFileSync("./roles.wumpy",roles.join("\n"),"UTF-8");
				message.channel.send(`\:white_check_mark: **Vous avez bien supprimé ${roleName} de la liste.**`);
			}
		}else message.channel.send(`\:no_entry: **Vous n'avez pas la permission de faire cela.** \:no_entry:`);
    }
}