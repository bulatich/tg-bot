export default  class MessageService {
    static convert(message) {
        switch (message) {
            case 'JS': {
                return 'ДжаваСкрипт'
            }
        case 'JAVA': {
            return 'ДЖава'
        }
        }
    }
}