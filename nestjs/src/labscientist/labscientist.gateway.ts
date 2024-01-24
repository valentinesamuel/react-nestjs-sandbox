import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class LabscientistGateway {
  constructor() {}
  @WebSocketServer() server: Server;

  notifyLabScientist(
    @MessageBody()
    testPayload: {
      doctor: string;
      patient: string;
      scientist: string;
    },
  ) {
    this.server.emit('newTestRequest', testPayload);
    return;
  }

  @SubscribeMessage('test-done')
  async notifyDoctor(
    @MessageBody()
    testPayload: {
      doctor: string;
      patient: string;
      scientist: string;
      result: number[];
    },
  ) {
    this.server.emit('sci-done-test', testPayload);
  }
}
