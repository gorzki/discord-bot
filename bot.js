var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var moment = require('moment');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
var baium = {
  name: "baium",
  window: "2h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(119, 'hours').format('LLL');
  }
};
var aq = {
  name: "aq",
  window: "2h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(19, 'hours').format('LLL');
  }
};
var orfen = {
  name: "orfen",
  window: "2h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(47, 'hours').format('LLL');
  }
};
var core = {
  name: "core",
  window: "2h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(35, 'hours').format('LLL');
  }
};
var zaken = {
  name: "zaken",
  window: "2h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(49, 'hours').format('LLL');
  }
};
var antharas = {
  name: "antharas",
  window: "2h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(191, 'hours').format('LLL');
  }
};
var valakas = {
  name: "valakas",
  window: "2h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(263, 'hours').format('LLL');
  }
};
var frintezza = {
  name: "frintezza",
  window: "2h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(47, 'hours').format('LLL');
  }
};
var golkonda = {
  name: "golkonda",
  window: "0h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(7, 'hours').format('LLL');
  }
};
var cabrio = {
  name: "cabrio",
  window: "0h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(7, 'hours').format('LLL');
  }
};
var hallate = {
  name: "hallate",
  window: "0h",
  tod: moment().format('LLL'),
  next: moment().format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(7, 'hours').format('LLL');
  }
};
var kernon = {
  name: "kernon",
  window: "0h",
  tod: moment().format('LLL'),
  next: moment().add(21, 'minutes').format('LLL'),
  setTod: function(){
    this.tod = moment().format('LLL');
    this.next = moment().add(7, 'hours').format('LLL');
  }
};
var bosses = [baium, core, aq, orfen, zaken, frintezza, valakas, antharas, cabrio, hallate, kernon, golkonda];
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
// setInterval(function(){
//   var come_soon = [];
//   var already_alive = [];
//   bosses.forEach(function(boss){
//     var time = (Date.parse(boss.next) - Date.now())/1000;
//     logger.info(time);
//     if ( time < 1200 && time > 0 ){
//       var data = {
//         name: boss.name,
//         tod: time
//       }
//       come_soon.push(data);
//     }
//     if (time <=0 && time > -900){
//       already_alive.push(boss.name);
//     }
//     });
//     if (come_soon.length || already_alive.length){
//       bot.sendMessage({
//         to: "375747110873726976",
//         message:
//           "Rb incoming: "
//           // come_soon.forEach();
//           +"Already fucking alive: "+
//           already_alive.forEach(function(alive){
//             +alive;
//           })
//       });
//     }
// }, 20000);
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        bosses.forEach(function(boss){
          if (cmd == boss.name){
            bot.sendMessage({
             to: channelID,
             message: "RB: "+boss.name+"\nOkno: "+boss.window+"\nToD: "+boss.tod+"\nOkno nastepnego zaczyna sie o: "+boss.next
            });
          }
          if (cmd == boss.name+'_dead'){
            boss.setTod();
            bot.sendMessage({
             to: channelID,
             message: "RB: "+boss.name+" ustawiono czas jego smierci"
            });
          }
        });
        if (cmd == 'subclass'){
          bot.sendMessage({
            to: channelID,
            message: "RB: "+cabrio.name+" okno: "+cabrio.window+" ToD: "+cabrio.tod+" Okno nastepnego zaczyna sie o: "+cabrio.next+
            "\nRB: "+hallate.name+" okno: "+hallate.window+" ToD: "+hallate.tod+" Okno nastepnego zaczyna sie o: "+hallate.next+
            "\nRB: "+kernon.name+" okno: "+kernon.window+" ToD: "+kernon.tod+" Okno nastepnego zaczyna sie o: "+kernon.next+
            "\nRB: "+golkonda.name+" okno: "+golkonda.window+" ToD: "+golkonda.tod+" Okno nastepnego zaczyna sie o: "+golkonda.next
          });
        }


            // Just add any case commands if you want to..
     }

});
