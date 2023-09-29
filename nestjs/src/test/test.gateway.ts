import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class TestGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    // Handle connection event
    console.log(`${client} Conn has Started`);
  }

  handleDisconnect(client: Socket) {
    console.log(`${client} Conn has Ended`);
  }

  @SubscribeMessage('events')
  handleEvent(@ConnectedSocket() client: Socket) {
    console.log(`=> Received events call from ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { first: string },
  ) {
    console.log('=> hello', client.id);
    this.server.emit('=> exception', data.first);
  }
}
