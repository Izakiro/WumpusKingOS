module.exports={
	//commande add whois
	function:(message,client)=>{
		var cmd=message.content.split(" ");
		if(cmd.length<2){
			message.channel.send("\:speech_balloon: **Syntaxe : /addwhois <url>**");
			return;
		}
		const fs=require("fs");
		const isImageUrl=require("is-image-url");
		var userId=message.member.user.id;
		var url=cmd[1];
		if(isImageUrl(url)){
			fs.writeFileSync("./whois.wumpy",fs.readFileSync("./whois.wumpy","UTF-8")+userId+"="+url+"\n","UTF-8");
			message.channel.send("\:white_check_mark: **Votre whois a bien été enregistré.**");
		}else message.channel.send("\:warning: **Ce n'est pas une image.** \:warning:");
    }
}