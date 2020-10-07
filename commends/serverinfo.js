const discord = require("discord.js");

module.exports.run = async(client, message, ) => {

    var botEmbed = new discord.MessageEmbed()
    
.setTitle(`haestgaming discordserver`)
.setDescription(`de haestgaming discord`)
.setColor(`#0dfff7`)
.addFields(
    {name: "je bent de server gejoint op", value: message.member.joinedAt},
    {name: "totaal members", value:message.guild.memberCount}
)

return message.channel.send(botEmbed); 

}

module.exports.help = {
    name: "serverinfo"
}