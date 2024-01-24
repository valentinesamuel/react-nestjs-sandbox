import { Module } from '@nestjs/common';
import { LabscientistService } from './labscientist.service';
import { LabscientistGateway } from './labscientist.gateway';

@Module({
  providers: [LabscientistGateway, LabscientistService],
})
export class LabscientistModule {}
