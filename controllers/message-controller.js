const QUESTIONS = [{id: 1, title: 'Что такое замыкание?'}, {id: 2, title: 'Что такое memo?'}]

export default class MessageController {
    static getAll() {
        return JSON.stringify(QUESTIONS);
    }
};
