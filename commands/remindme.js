module.exports={
	//reminder soi-même
	function:(message,client)=>{
		var cmd=message.content.split(" ");
		var returntime;
		var timemeasure;
		if(cmd.length>3){
			//permet de définir le temps du reminder
			timemeasure=cmd[1].substring((cmd[1].length-1),(cmd[1].length))
			returntime=cmd[1].substring(0,(cmd[1].length-1))
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
				var content=cmd.join(" ");
				message.channel.send(`<@${message.member.user.id}>\n${content}`);
			}, returntime)
		}else message.channel.send("\:speech_balloon: **Syntaxe : /remindme <time>[s/m/h/d] <message>**");
    }
}