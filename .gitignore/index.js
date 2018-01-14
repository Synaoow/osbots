aimport { GuildMember } from "discord.js";

// Inclure
const discord = require("discord.js");

//Variables
const clientDiscord = new discord.Client();
const PREFIX = "!";

//events

clientDiscord.on("ready", () => {
    console.log("Pret à bosser");

    clientDiscord.user.setGame('SITE EN MAINTENANCE', 'https://www.twitch.tv/OSPACKS');
    


    clientDiscord.channels.get("399670879400755203").send({embed: { 
      author: {

        name: clientDiscord.user.username,
        icon_url: clientDiscord.user.avatarURL

      },
      color: 15105570,
      
      title: '',
      fields: [
        {
          name: 'Information »',
          value: ' OSBot à été redémarré avec succès !',
        }
    
      ],

      

  }
})

});

clientDiscord.on("message", message => {

  if(message.content[0] === PREFIX){
    if(message.content === "!test"){

      message.channel.send({embed: { 

          color: 15844367,
          title: 'test',
          description: '1 2 3 ',

      }
    })
    }

  }


});




clientDiscord.on('guildMemberAdd', guildMember => {


})

clientDiscord.on('messageReactionAdd', (reaction, user) => {
  if(reaction.emoji.name === ':heart:')
  

  clientDiscord.channels.get("399670879400755203").send('Dernière réaction:' + reaction.emoji.name);
  

});


//connexion
clientDiscord.login("NDAxODU0NDIyMjYwNjQ1ODg4.DTwPqA.2UlalFl6GTkN-Hub6PE1pClsxOo")

