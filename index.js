const discord = require("discord.js");
const botComfig = require("./botComfig.json");

const fs = require("fs");

const client = new discord.Client
client.commands = new discord.Collection();

fs.readdir("./commends/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0){
        console.log("kon geen files vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var filesGet = require(`./commends/${f}`);
        console.log(`de file ${f} is geladen`);

        client.commands.set(filesGet.help.name, filesGet);

    })


})

client.login(process.env.token);

client.on("ready",async () => {
    console.log(`${client.user.username} is online`)
client.user.setActivity("testen", {type: "playing"});


});

client.on("message", async message =>{

if(message.author.bot) return;

if(message.channel.type == "dm")return;

var prefix = botComfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];


    var commends = client.commands.get(command.slice(prefix.length));

    var args = messageArray.slice(1);

    if(commends) commends.run(client, message)





    

    
}


    
   
    


);