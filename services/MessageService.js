export default  class MessageService {
    static convert(message) {
        switch (message) {
            case 'js': {
                return 'ДжаваСкрипт'
            }
        case 'java': {
            return 'ДЖава'
        }
        }
    }
}