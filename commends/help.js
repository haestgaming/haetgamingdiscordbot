const discord = require("discord.js");

module.exports.run = async(client, message, ) => {

    try {

        var text = ` **haestgaming bot** \n\n **__commends__** \n !hallo - geeft een hallo terug \n !botinfo - geeft info over de haestgaming bot \n !serverinfo - geeft info over de server`;

        message.author.send(text);

        message.channel.send("alle commends staan in je privebrichten");

    }catch(error){
        console.log("er is iets fout gelopen");
    }

}

module.exports.help = {
    name: "help"
}