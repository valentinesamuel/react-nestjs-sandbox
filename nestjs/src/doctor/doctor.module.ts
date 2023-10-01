import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorGateway } from './doctor.gateway';

@Module({
  providers: [DoctorGateway, DoctorService],
})
export class DoctorModule {}
