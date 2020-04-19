var TelegramBot = require('node-telegram-bot-api');
var token = '957922661:AAFFm2qQzQH0lr7_8fJtRygh0-qE0wZ38BE';
var bot = new TelegramBot(token,{ polling : true});

bot.onText(/\/start/, function(msg, match){
    var UserId = msg.from.id;
    bot.sendMessage(UserId, 'Hello from Misha');
});

bot.onText(/\/getdate/, function(msg, match){
    var UserId = msg.from.id;
    var CurrDate = new Date;
    bot.sendMessage(UserId, 'curr date ='+CurrDate.getDate()+'/'+CurrDate.getMonth()+'/'+CurrDate.getFullYear());
});
/*
bot.on('message',function(msg){
    var ChatId = msg.chat.id;
    bot.sendMessage(ChatId,'mycomnds');

});

*/