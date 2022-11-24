import MessageService from "../services/MessageService.js";

const QUESTIONS = [{id: 1, title: 'Что такое замыкание?'}, {id: 2, title: 'Что такое memo?'}]

export default class MessageController {
    static convert(message) {
       return  MessageService.convert(message)
    }
};
