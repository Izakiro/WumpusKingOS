module.exports={
	//commande whois
	function:(message,client)=>{
		var cmd=message.content.split(" ");
		if(cmd.length<2){
			message.channel.send("\:speech_balloon: **Syntaxe : /whois <user>**");
			return;
		}
		const user=message.guild.members.map((member)=>{return member.user;}).find(val=>val.username===cmd[1]);
		const member=message.guild.members.find(val=>val.nickname===cmd[1]);
		if(user||member){
			const fs=require("fs");
			var name=user?user.username:member.nickname;
			var id=user?user.id:member.user.id;
			var data=fs.readFileSync("./whois.wumpy","UTF-8");
			var images=data.split("\n");
			var p=-1;
			for(var i=0;i<images.length-1;i++) if(images[i].startsWith(id)) p=i;
			if(p==-1) message.channel.send("\:warning: **Cette personne n'a pas fait de whois.** \:warning:");
			else{
				message.channel.send({"embed": {
                                		"color":0x8340A4,
                                		"title":`${name} is...`,
										"image":{"url":images[p].split("=")[1]},
										"footer":{"text":"© Izakiro - [BOT] King Wumpy 1st"}
                        			}
                	});
			}
		}else message.channel.send("\:warning: **Cette personne n'est pas sur ce discord.** \:warning:");
    }
}