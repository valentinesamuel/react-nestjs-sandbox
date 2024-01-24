import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabscientistGateway } from './labscientist/labscientist.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LabscientistGateway],
})
export class AppModule {}
