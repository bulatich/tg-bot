import TelegramBot from 'node-telegram-bot-api';
import Frontend from './src/frontendPath/index.js';
import mongoose from "mongoose";

const DB = 'mongodb+srv://dbUser:158796Qw@cluster0.vkbbl.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB).then(() => {
    console.log('connected')
}).catch(e => console.log(e))

const token = process.env.TELEGRAM_API_TOKEN;

const frontend = new Frontend(0)

// Create a bot that uses 'polling' to fetch new updates
export const bot = new TelegramBot(token, {polling: true});


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
    if (data === 'frontend') {
        frontend.sendQuestion(chatId)
    }
    await bot.sendMessage(chatId, data)
})