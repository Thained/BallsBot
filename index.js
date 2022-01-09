const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI5NTM0NDM3MDczNDk0MDc2.YdouZw.shSfH_Wuf9IT1Alfu0RBhrt104k"

const client = new Discord.Client({

intents: [
"GUILDS",
"GUILD_MESSAGES"
]
})

client.on("ready", () => {

    console.log(`logged in as ${client.user.tag}`)
})


client.on("messageCreate", (message) =>{

if (message.content == "hi"){

    message.reply("Ratio Bozo!!")
}

})

client.login(process.env.TOKEN)