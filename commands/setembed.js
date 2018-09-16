const Config = require("../config.js");

module.exports={
	//envoyer un message embed simple
	function:(message,client)=>{
		if(message.member.roles.find(val=>val.name===Config.adminRank)){
			var cmd=message.content.split(" ");
			if(cmd.length<2){
				message.channel.send("\:speech_balloon: **Syntaxe : /setembed <title>$<desc>$<title1>::<content1>$<title2>::<content2>...**");
				return;
			}
			var args=cmd.slice(1).join(" ").split("$");
			if(args.length<3){
				message.channel.send("\:speech_balloon: **Syntaxe : /setembed <title>$<desc>$<title1>::<content1>$<title2>::<content2>...**");
				return;
			}
			var title=args[0];
			var desc=args[1];
			var fields=args.slice(2);
			var embed={embed:{
				color: 0x8340A4,
				title: title,
				description: desc,
				footer: {text:"© Izakiro - [BOT] King Wumpy 1st"}
			}};
			if(fields.length>0) embed.embed.fields=[];
			for(var i=0;i<fields.length;i++){
				var field=fields[i].split("::");
				embed.embed.fields[i]={
					name: field[0],
					value: field[1]
				}
			}
			message.channel.send(embed);
		}else message.channel.send(`\:no_entry: **Vous n'avez pas la permission de faire cela.** \:no_entry:`);
    }
}