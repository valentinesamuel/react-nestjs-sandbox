import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@WebSocketGateway()
export class DoctorGateway {
  constructor(private readonly doctorService: DoctorService) {}

  @SubscribeMessage('createDoctor')
  create(@MessageBody() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @SubscribeMessage('findAllDoctor')
  findAll() {
    return this.doctorService.findAll();
  }

  @SubscribeMessage('findOneDoctor')
  findOne(@MessageBody() id: number) {
    return this.doctorService.findOne(id);
  }

  @SubscribeMessage('updateDoctor')
  update(@MessageBody() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update(updateDoctorDto.id, updateDoctorDto);
  }

  @SubscribeMessage('removeDoctor')
  remove(@MessageBody() id: number) {
    return this.doctorService.remove(id);
  }
}
