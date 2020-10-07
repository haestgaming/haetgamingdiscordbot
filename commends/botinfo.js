const discord = require("discord.js");

module.exports.run = async(client, message, ) => {

    var botEmbed = new discord.MessageEmbed()
    
    .setTitle(`haestgaming bot`)
    .setDescription(`bot die werkt voor haestgaming discord`)
    .setColor(`#fff70a`)

    return message.channel.send(botEmbed);    

}

module.exports.help = {
    name: "botinfo"
}