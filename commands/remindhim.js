module.exports={
	//reminder quelqu'un
	function:(message,client)=>{
		var cmd=message.content.split(" ");
		var returntime;
		var timemeasure;
		if(cmd.length>3){
			//permet de définir le temps et l'utilisateur du reminder
			const user=message.guild.members.map((member)=>{return member.user;}).find(val=>val.username===cmd[1]);
			const member=message.guild.members.find(val=>val.nickname===cmd[1]);
			if(user||member){
				timemeasure=cmd[2].substring((cmd[2].length-1),(cmd[2].length))
				returntime=cmd[2].substring(0,(cmd[2].length-1))
				//permet de convertir le temps
				switch(timemeasure){
					case "s":
						returntime=returntime*1000;
						break;
					case "m":
						returntime=returntime*1000*60;
						break;
					case "h":
						returntime=returntime*1000*60*60;
						break;
					case "d":
						returntime=returntime*1000*60*60*24;
						break;
					default:
						returntime=returntime*1000;
						break;
				}
				message.channel.send("\:white_check_mark: **Votre remind a bien été enregistré.**")
				client.setTimeout(function(){
					cmd.shift();
					cmd.shift();
					cmd.shift();
					var content=cmd.join(" ");
					message.channel.send(`<@${user?user.id:member.user.id}>\n${content}`);
				}, returntime)
			}else message.channel.send("\:warning: **Cette personne n'est pas sur le discord.** \:warning:")
		}else message.channel.send("\:speech_balloon: **Syntaxe : /remindhim <user> <time>[s/m/h/d] <message>**");
    }
}