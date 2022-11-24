const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_API_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Set initial commands

bot.setMyCommands([
    {command: '/start', description: 'Пройти собеседование'},
    {command: '/info', description: 'Информация'}
])

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async  (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  switch (text) {
      case '/start': {
        await bot.sendMessage(chatId, 'Received your message');
          await bot.setMyCommands([
              {command: '/frontend', description: 'Пройти собеседование по frontend'},
              {command: '/backend', description: 'Пройти собеседование по backend'}
          ])
          break;
      }
      case '/info': {
          bot.sendMessage(chatId, 'Received your message');
          break;
      }
      default: {
          bot.sendMessage(chatId, 'Некорректная команда');
      }
  }
});