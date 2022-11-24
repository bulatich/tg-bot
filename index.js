const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_API_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Set initial commands
//
//bot.setMyCommands([
//    {command: '/start', description: 'Пройти собеседование'},
//    {command: '/info', description: 'Информация'}
//])

const gameOptionns = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            {text: 'Frontend', callback_data: ''},
            {text: 'Backend', callback_data: ''}
        ]
    })
}

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async  (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  switch (text) {
      case '/start': {
           bot.sendMessage(chatId, 'Choose type of interview', gameOptionns)
          break;
      }
      default: {
          bot.sendMessage(chatId, 'Invalid command');
      }
  }
});