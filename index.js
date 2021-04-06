const Discord  = require("discord.js");
const bot      = new Discord.Client({fetchAllMembers: true});
const fs       = require("fs");
const moment   = require("moment");
const ms       = require('ms');

 


const log = (msg) => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${msg}`);
};

bot.on("message", message => {

  if (message.author.bot) return;
  if (message.channel.type == "dm") return;


});

bot.on("ready", () => {


  log('Join vc by TheWutyAbad');
  

  const channel = bot.channels.cache.get(""); // ==> ID Vc ke Mikhayd Connect she
  if (!channel) return console.error("In Channel Vojood Nadarad");
  channel.join().then(connection => {
  console.log(`Bot Be Channel Join Dad`);
  }).catch(e => {
     console.error(e);
   });


});


bot.on("error", console.error);
bot.on("warn", console.warn);


bot.login(""); // ==> Token Bot ya Token Mamoli 





