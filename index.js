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
                max: 3,
                time: 10000 * 10000
            })

            let embed = new EmbedBuilder()
            embed.setTitle(values.getEmbed_Message_Title())
            embed.setDescription(values.getEmbed_Message_Description())
            message.channel.send({ embeds: [embed] })

            let pollOptions = []
            let voted_1 = []
            let voted_2 = []
            let voted_3 = []

            collector.on('collect', msg => {
                if (voted_3.indexOf(msg.author.id) == '-1')
                    if (msg.content.toLowerCase() === '!stopvote') {
                        collector.stop('user cancelled')
                    }
                    if (msg.content.includes('\n')){
                        let new_message = msg.content.split('\n')
                        new_message.forEach(element => {
                            pollOptions.push(element)
                        });
                    }
                    else{
                        pollOptions.push(msg.content)
                    }
                    console.log(pollOptions)

            })

        }

        else if (message.content.toLowerCase() === '!stopvote'){
            message.channel.send("Voting has finished!")
            client.user.setActivity('Sleeping...')
        }

        else if (message.content.toLowerCase() === '!howtovote'){
            let embed_how_to_vote = new EmbedBuilder()
            embed_how_to_vote.setTitle(values.getEmbed_How_To_Vote_Title())
            embed_how_to_vote.setDescription(values.getEmbed_How_To_Vote_Title_Description())
            embed_how_to_vote.setImage(values.getEmbed_How_To_Vote_Good())
            let embed_how_to_vote_error = new EmbedBuilder()
            embed_how_to_vote_error.setImage(values.getEmbed_How_To_Vote_Wrong())
            message.channel.send({ embeds: [embed_how_to_vote, embed_how_to_vote_error] })
        }

    })
});

// function getPollOptions(collector){
//     return new Promise((resolve, reject) => {
//         collector.on('end', collected => {
//             resolve(collected.map(m => m.content)),
//             console.log(collected.size - 1)
//         })
//     })
// }
