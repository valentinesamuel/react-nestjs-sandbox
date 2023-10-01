import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { LabscientistService } from './labscientist.service';
import { CreateLabscientistDto } from './dto/create-labscientist.dto';
import { UpdateLabscientistDto } from './dto/update-labscientist.dto';

@WebSocketGateway()
export class LabscientistGateway {
  constructor(private readonly labscientistService: LabscientistService) {}

  @SubscribeMessage('createLabscientist')
  create(@MessageBody() createLabscientistDto: CreateLabscientistDto) {
    return this.labscientistService.create(createLabscientistDto);
  }

  @SubscribeMessage('findAllLabscientist')
  findAll() {
    return this.labscientistService.findAll();
  }

  @SubscribeMessage('findOneLabscientist')
  findOne(@MessageBody() id: number) {
    return this.labscientistService.findOne(id);
  }

  @SubscribeMessage('updateLabscientist')
  update(@MessageBody() updateLabscientistDto: UpdateLabscientistDto) {
    return this.labscientistService.update(updateLabscientistDto.id, updateLabscientistDto);
  }

  @SubscribeMessage('removeLabscientist')
  remove(@MessageBody() id: number) {
    return this.labscientistService.remove(id);
  }
}
