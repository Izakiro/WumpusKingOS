const remove=(array,element)=>{
	const index=array.indexOf(element);
	array.splice(index,1);
}

module.exports={
	//commande delete whois
	function:(message,client)=>{
		const fs=require("fs");
		var data=fs.readFileSync("./whois.wumpy","UTF-8");
		var images=data.split("\n");
		var p=-1;
		for(var i=0;i<images.length-1;i++) if(images[i].startsWith(message.member.user.id)) p=i;
		if(p==-1) message.channel.send("\:warning: **Vous n'avez pas de whois.** \:warning:");
		else{
			remove(images,images[p]);
			fs.writeFileSync("./whois.wumpy",images.join("\n"),"UTF-8");
			message.channel.send("\:white_check_mark: **Vous avez bien supprimé votre whois.**");
		}
    }
}