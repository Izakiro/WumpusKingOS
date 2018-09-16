const Discord = require("discord.js");
const Config = require("./config.js");
const Reactions = require("./reactions.js");
const EmojiReact = require("./emojiReact.js");
const fs = require("fs");

const client = new Discord.Client();

client.on("ready",()=>{
	client.user.setActivity(Config.ACTIVITY).catch(console.error);
});
//message de bienvenue
client.on("guildMemberAdd",(member)=>{
	//role donné aux personnes qui rejoignent
	member.addRole(member.guild.roles.find(val=>val.name===Config.welcomeRank).id);
	member.guild.channels.find(val=>val.name===Config.welcomeChan).send(`**Bienvenue à toi, <@${member.id}>.**`);
});
//réagit aux commandes
client.on("message",(message)=>{
	if(message.content.startsWith(Config.PREFIX)){
		var msg=message.content.split(" ");
		var cmd=msg[0].substr(1)+".js";
		if(fs.existsSync("./commands/"+cmd)) require("./commands/"+cmd).function(message,client);
		else message.channel.send("\:warning: **Ceci n'est pas une commande valide.** \:warning:")
		message.delete();
	//contrôler ce qu'écrit le bot via un channel
	}else if(message.channel.name==Config.botSaying){
		var channel=message.content.substring(0,message.content.indexOf(" "));
		message.guild.channels.find(val=>val.name===channel).send(message.content.substring(message.content.indexOf(" "),message.content.length));
	}else Reactions.react(message);
});
//réagit aux reactions emojis
client.on("messageReactionAdd",(reaction,user)=>{
	if(reaction.message.channel.name===Config.poll) EmojiReact.count(reaction);
});

//token secret du bot
client.login(Config.secretToken);
