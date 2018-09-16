module.exports={
	//liste des rôles
	function:(message,client)=>{
		var cmd=message.content.split(" ");
		if(cmd.length===1){
			const fs=require("fs");
			var data=fs.readFileSync("./roles.wumpy","UTF-8");
			var roles=data.split("\n");
			var msg="__Voici la liste des différents rôles:__";
			for(var i=0;i<roles.length-1;i++){
				msg+=" **"+roles[i]+"**"+(i!=roles.length-2?" | ":"");
			}
			message.channel.send(msg);
		}else message.channel.send("\:speech_balloon: **Syntaxe : /listrole**");
    }
}