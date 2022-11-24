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
            [ {text: 'Frontend', callback_data: 'frontend'},
              {text: 'Backend', callback_data: 'backend'}
            ]
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
          await bot.sendMessage(chatId, 'Choose type of interview', gameOptionns)
          break;
      }
      default: {
         await bot.sendMessage(chatId, 'Invalid command');
      }
  }
});

bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId= msg.message.chat.id
    await bot.sendMessage(chatId, data)
})