const discord = require("discord.js");

module.exports.run = async(client, message, args ) => {
   
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming");

    if (!args[0]) return message.reply("Geef een aantal op dat je weg wilt halen");

    if(Number.isInteger(args[0])){
        
    }else{

        return message;reply("geef een getal op");

    }

    }
    


module.exports.help = {
    name: "clear"
}