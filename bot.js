const Discord = require("discord.js");
const Reuss = new Discord.Client();

Reuss.on('ready', () => {
   Reuss.user.setGame('Never Killed','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('Russ Online')
    console.log('---------------')
  });

Reuss.login(process.env.REUSS)
const D7omz = new Discord.Client();

D7omz.on('ready', () => {
   D7omz.user.setGame('مَآْ عَشِقْتُ تُرَآْبَ آَرْضٍ مِثْلَ تُرَآْبُ آْلْسُّعُوْدِيَّةُ','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('D7omz Online')
    console.log('---------------')
  });

D7omz.login(process.env.D7OMZ)
const D7omz2 = new Discord.Client();

D7omz2.on('ready', () => {
   D7omz2.user.setGame('Raped My Life.','https://www.twitch.tv/Rezfix');
    console.log('---------------');
    console.log('D7omz2 Online')
    console.log('---------------')
  });

D7omz2.login(process.env.D7OMZ2)
