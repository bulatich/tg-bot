export default  class MessageService {
    static convert(message) {
        switch (message) {
            case '/start': {
                return 'Добро пожаловать! Выберите тип сообеседования, которое вы хотели бы пройти'
            }
            case '/frontend': {
                return 'ДжаваСкрипт'
            }
            case '/backend': {
                return 'ДЖава'
            }
        }
    }
}