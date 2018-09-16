const Config = require("../config.js");

module.exports={
	//crée un rôle + salon
	function:(message,client)=>{
		if(message.member.roles.find(val=>val.name===Config.adminRank)){
			var cmd=message.content.split(" ");
			if(cmd.length<2){
				message.channel.send("\:speech_balloon: **Syntaxe : /addrole <role>**");
				return;
			}
			var roleName=cmd[1];
			const fs=require("fs");
			fs.writeFileSync("./roles.wumpy",fs.readFileSync("./roles.wumpy","UTF-8")+`${roleName}\n`,"UTF-8");
			message.guild.createRole({name:roleName}).then(role=>{
			    message.guild.createChannel(role.name.toLowerCase(),"text",[{
					id: message.guild.id,
					deny: ["VIEW_CHANNEL"]
				},{
					id: role.id,
					allow: ["VIEW_CHANNEL"]
				}]).then(channel=>channel.setParent(message.guild.channels.find(val=>val.name===Config.welcomeChan).parentID));
			});
			message.channel.send(`\:white_check_mark: **Vous avez bien créé le rôle ${roleName}.**`);
		}else message.channel.send(`\:no_entry: **Vous n'avez pas la permission de faire cela.** \:no_entry:`);
    }
}