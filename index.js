const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_API_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Set initial commands

bot.setMyCommands([
    {command: '/start', description: 'Пройти собеседование'},
    {command: '/info', description: 'Бот поможет подготовиться к собеседованию или пройти скринниг по актуальным вопросам из собеседований!'}
])

// Matches "/start [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Выберите направление');
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});