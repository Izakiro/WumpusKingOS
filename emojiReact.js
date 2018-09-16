const Discord = require("discord.js");

module.exports={
    //compte pour le sondage
    count:(reaction)=>{
        //recherche du smiley "oui"
        if(reaction.message.reactions.array().find(val=>val["_emoji"].name==='✔')) var oui = reaction.message.reactions.array().filter(val=>val["_emoji"].name==='✔')[0].count;
        else var oui=0
        //recherche du smiley "non"
        if(reaction.message.reactions.array().find(val=>val["_emoji"].name==='✖')) var non = reaction.message.reactions.array().filter(val=>val["_emoji"].name==='✖')[0].count;
        else var non=0
        var entries=Number(reaction.message.embeds[0].fields[0].name.slice(9));
        var totalentries=oui+non;
        if(totalentries<entries){
            return;
        }else{
            var pourcentageOui=Math.round((oui/totalentries)*100);
            var pourcentageNon=Math.round((non/totalentries)*100);
            var content=reaction.message.embeds[0].fields[0].value.split("\n")[0];
            reaction.message.channel.send({embed: {
                color: 0x8340A4,
                fields: [{
                    name: `${content}`,
                    value: `**Résultat** : __Oui__ : ${pourcentageOui}% | __Non__ : ${pourcentageNon}%`
                }],
                footer: {text:"© Izakiro - [BOT] King Wumpy 1st"}
            }})
            reaction.message.delete()
        }
    }
}