const Config = require("../config.js");

module.exports={
	//ban quelqu'un
	function:(message,client)=>{
        if(message.member.roles.find(val=>val.name===Config.adminRank)){
            var cmd=message.content.split(" ");
            var reason=cmd.slice(2).join(" ");
            const user=message.mentions.users.first();
            if(user){
                const member=message.guild.member(user);
                if(member){
                    member.ban(reason).then(()=> message.channel.send(`\:white_check_mark: **Vous avez bien banni ${user.tag}.**`))
					.catch(()=> message.channel.send("\:warning: **Je suis incapable de bannir cette personne.** \:warning:"));
                }else message.channel.send("\:warning: **Cette personne n'est pas sur ce discord.** \:warning:");
            }else message.channel.send("\:speech_balloon: **Syntaxe : /ban <user> [reason]**");
        }else message.channel.send(`\:no_entry: **Vous n'avez pas la permission de faire cela.** \:no_entry:`);
    }
}