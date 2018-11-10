const Discord = require("discord.js");
const HeyIm = new Discord.Client();

HeyIm.on('ready', () => {
   HeyIm.user.setGame('Rezfix','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('HeyIm Online')
    console.log('---------------')
  });

HeyIm.login(process.env.BOT_TOKEN);
const AbuA = new Discord.Client();

AbuA.on('ready', () => {
   AbuA.user.setGame('Rezfix','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('AbuA Online')
    console.log('---------------')
  });

AbuA.login(process.env.BOT_TOKE);
