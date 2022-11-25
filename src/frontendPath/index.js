import {bot} from '../../index.js';

const questions = [
    {text: 'Что такое замыкание?', callback_data: '1'},
    {text: 'Что такое memo?', callback_data: '2'},
]

const answersMap = {
    1: [{text: 'Доступ к переменным и параметрам функции', callback_data: 'qwe'}, {text: 'Область видимости', callback_data: 'asdf'}],
    2: [{text: 'Храние значение промежуточных вызовов фнкции', callback_data: 'ghj'}, {text: 'Библиотека', callback_data: 'lib'}]
}

 class Frontend {
    active = 0;
    constructor(active) {
        this.active = active;
    }
    static async sendQuestion(chatId) {
        const text = questions[this.active]
        const form = this.getTemplate(this.active + 1);
        await bot.sendMessage(chatId, text, form);
        this.active = this.active + 1;
   }
    getTemplate(questionKey) {
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
