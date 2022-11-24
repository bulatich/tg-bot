import axios from 'axios'
import { config } from 'dotenv'
import express from 'express'
import MessageController from './controllers/message-controller.js';

config()
const app = express()

const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//app.use('/new-message', (req, res, next) => {
//    const { message } = req.body;
//    const messageText = message?.text?.toLowerCase()?.trim();
//    const chatId = message?.chat?.id;
//    if (!messageText || !chatId) {
//        return res.sendStatus(400)
//    }
//    next()
//})

app.post('/new-message', async (req, res) => {
    const { message } = req.body

    const messageText = message?.text?.toLowerCase()?.trim()

    const chatId = message?.chat?.id
    if (!messageText || !chatId) {
        return res.sendStatus(400)
    }
    const text = MessageController.convert(messageText);
    try {
  await axios.post(TELEGRAM_URI, {
    chat_id: chatId,
    text
  })
  res.send('Done')
} catch (e) {
  console.log(e)
  res.send(e)
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})