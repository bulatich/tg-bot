import {bot} from '../../index.js';
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    
})

const questions = [
    {text: 'Что такое замыкание?', callback_data: '1'},
    {text: 'Что такое memo?', callback_data: '2'},
    {text: 'Что такое чистая функция?', callback_data: '3'},
    {text: 'Что такое event loop?', callback_data: '4'},
    {text: 'Что такое Promise?', callback_data: '5'},
]

const answersMap = {
    1: [{text: 'Доступ к переменным и параметрам функции', callback_data: '1_correct'}, {text: 'Область видимости', callback_data: '1_wrong'}],
    2: [{text: 'Храние значение промежуточных вызовов функции', callback_data: '2_correct'}, {text: 'Библиотека', callback_data: '2_wrong'}],
    3: [{text: 'Функция без side effects', callback_data: '3_correct'}, {text: 'Функция, которая ничего не возвращает', callback_data: '3_wrong'}],
    4: [{text: 'Алгоритм движка браузера', callback_data: '4_correct'}, {text: 'Метод JS', callback_data: '4_wrong'}],
    5: [{text: 'Класс по работе с отложенными вызовами', callback_data: '5_correct'}, {text: 'Массив', callback_data: '5_wrong'}]
}

 class Frontend {
    constructor(active) {
        this.active = active;
    }
    async sendQuestion(chatId) {
        console.log(this.active, questions)
        const text = questions[this.active].text
        const form = this.#getTemplate(this.active + 1);
        await bot.sendMessage(chatId, text, form);
        this.active = this.active + 1;
   }
    #getTemplate(questionKey) {
        return {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    answersMap[questionKey]
                ]
            })
        }
    }
    
}

export default Frontend;
