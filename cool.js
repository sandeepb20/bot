require('dotenv').config()


const Discord = require('discord.js');
const client = new Discord.Client({
   partials : ["MESSAGE"]
})

const cool_prefix = "." 
const admin_command = "role admin"

client.on('ready' , () => {
    console.log('Bot is ready to go!');
});

client.on('messageDelete' , msg => {
    msg.channel.send("Stop deleting messages")
})


client.on('message' , msg => {
    if (msg.content === "hello"){
        msg.channel.send("I'm  COOL_101");
        msg.reply("Hey ,What's up!!");
    };
});

client.on('message' , msg => {
    if (msg.content == "Sandeep"){
        msg.react("🙂");
    }

    if (msg.content === `${cool_prefix}${admin_command}`){
        adminRole(msg.member);
    };
});

function adminRole(member){
    member.roles.add("864208531573309491");
}

client.login(process.env.Token)