const { Client, Intents, GatewayIntentBits, EmbedBuilder } = require('discord.js')
require('dotenv/config')

const Values = require('./edit.js')
const values = new Values()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

const userCreatedPolls = new Map();

client.login(process.env.TOKEN)
client.on('ready', () => {
    console.log(client.user.tag + " has logged in.")
    client.user.setActivity('Sleeping...')

    client.on('messageCreate', async message => {
        if (message.author.bot) return;
        if (message.content.toLowerCase() === '!createpoll'){
            client.user.setActivity('COUNTING!!!')
            message.channel.send("Voting has begun!")
            let filter = mensagem => mensagem.author.id === message.author.id
            //                          message.content.toLowerCase() === '!createpoll' &&
            //                          message.content.toLowerCase() === '!stopvote'
            let collector = message.channel.createMessageCollector({
                filter,
                max: 5,
                time: 10000 * 10000
            })

            let embed = new EmbedBuilder()
            embed.setTitle(values.getEmbed_Message_Title())
            embed.setDescription(values.getEmbed_Message_Description())
            message.channel.send({ embeds: [embed] })

            let pollOptions = await getPollOptions(collector)
            collector.on('collect', msg => {
                if (msg.content.toLowerCase() === '!stopvote') {
                    collector.stop('user cancelled')
                }
                console.log(msg.content)
                pollOptions.push(msg.content)
            })

            console.log(pollOptions)

        }

        else if (message.content.toLowerCase() === '!stopvote'){
            message.channel.send("Voting has finished!")
            client.user.setActivity('Sleeping...')
        }

    })
});

function getPollOptions(collector){
    return new Promise((resolve, reject) => {
        collector.on('end', collected => {
            resolve(collected.map(m => m.content)),
            console.log(collected.size - 1),
            client.user.setActivity('Sleeping...')
        })
    })
}
