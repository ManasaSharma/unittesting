import { MessageService } from "./message.service"

describe ('Message Service ', () => {
    let service: MessageService;
    
    beforeEach(() => {
        
    })

    it('should have no messages to start', () => {
        service = new MessageService();
        expect(service.messages.length).toBe(0);
    })

    it('should add a messages when add is called ', () => {
        service = new MessageService();
        service.add('message1');

        expect(service.messages.length).toBe(1);
    })
})