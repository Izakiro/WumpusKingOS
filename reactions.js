const Discord = require("discord.js");
const Config = require("./config.js");

module.exports={
	react:(message)=>{
		//répond à Bonjour
		if(message.content.startsWith("Bonjour!")){
			message.channel.send(`**Bonjour <@${message.member.user.id}>!**`);
		}
		//unflip les tables
		if(message.content=="(╯°□°）╯︵ ┻━┻"){
			message.channel.send("┬─┬ ノ( ゜-゜ノ)"),
			message.channel.send("Un peu de respect pour les tables, voyons!");
		}
		//affiche un message embed
		if(message.content=="embed1"){
			if(message.member.roles.find(val=>val.name===Config.adminRank)){
				const embed=new Discord.RichEmbed()
					.setThumbnail("https://image.noelshack.com/fichiers/2018/36/2/1536012305-vslijxzk-400x400.png")
					.setTitle("__***Discord du Wumpus Gang***__")
					.setColor(0x8340A4)
					.setDescription("Un discord communautaire ouvert à tous et qui voue ~secrètement~ un culte aux Wumpus.")
					.addField("__*Règlement*__",
						"- Respect des règles de savoir-vivre (pas d'insultes, homophobie, racisme, respect de chacun, ...) \n"+
						"- Respect de la communauté (pas de propos anti Wumpus). \n"+
						"- Orthographe soignée (les fautes sont humaines mais le langage SMS est proscrit). \n"+
						"- Les débats ne doivent pas déborder et amener la violence, sinon un Brother ou Big Brother devra appliquer des sanctions.")
					.setFooter("© Izakiro - [BOT] King Wumpy 1st");
				message.channel.send(embed);
			}else message.channel.send(`\:no_entry: **Vous n'avez pas la permission de faire cela.** \:no_entry:`);
		}
		//affiche un message embed
		if(message.content=="embed2"){
			if(message.member.roles.find(val=>val.name===Config.adminRank)){
				const embed=new Discord.RichEmbed()
					.setThumbnail("https://orig00.deviantart.net/91b4/f/2018/133/6/b/discord_wumpus_by_pamvllo-dcbgidn.png")
					.setTitle("__***Commandes du bot***__")
					.setColor(0x8340A4)
					.setDescription("Liste des commandes du bot qui sera mise à jour.")
					.addField("__*Administration*__",
						"**/setembed** => permet de créer un message embed. \n"+
						"**/sendimage** => permet d'envoyer une image embed. \n"+
						"**/kick** => permet de kicker quelqu'un. \n"+
						"**/ban** => permet de bannir quelqu'un. \n"+
						"**/addrole** => permet de créer un rôle et le salon correspondant. \n"+
						"**/delrole** => permet de supprimer un rôle et le salon correspondant.")
					.addField("__*Utilitaire*__",
						"**/remindme** => permet de demander au bot de rappeler quelque chose. \n"+
						"**/remindhim** => permet de demander au bot de rappeler quelque chose à quelqu'un. \n"+
						"**/suggestion** => permet d'envoyer une suggestion par rapport au serveur et au bot.\n"+
						"**/sondage** => permet de créer un sondage avec comme réponse oui/non.")
					.addField("__*Rôles*__",
						"**/listrole** => permet d'avoir la liste des rôles disponibles. \n"+
						"**/getrole** => permet d'obtenir un rôle. \n"+
						"**/remrole** => permet de se retirer un rôle.")
					.addField("__*Informations*__",
						"**/infodev** => permet d'en apprendre plus sur mon développement.")
					.addField("__*Fun*__",
						"**/addwhois** => permet d'ajouter un \"whois\". \n"+
						"**/delwhois** => permet de supprimer un \"whois\". \n"+
						"**/whois** => permet de voir le \"whois\" de quelqu'un.\n"+
						"**/chien** => permet de voir un chien aléatoire. \n"+
						"**/boobs** => permet de voir une poitrine aléatoire. \n"+
						"**/ass** => permet de voir un fessier aléatoire.")
					.setFooter("© Izakiro - [BOT] King Wumpy 1st");
				message.channel.send(embed);
			}else message.channel.send(`\:no_entry: **Vous n'avez pas la permission de faire cela.** \:no_entry:`);
		}
	}
}
