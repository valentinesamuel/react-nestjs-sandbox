import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LabscientistGateway } from './labscientist/labscientist.gateway';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly labScientistGateway: LabscientistGateway,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('submit')
  async submitLabTestRequest(
    @Body()
    labtestRequest: {
      doctor: string;
      patient: string;
      scientist: string;
    },
  ) {
    //save test request in theh db

    this.labScientistGateway.notifyLabScientist(labtestRequest);
    return { success: true, message: 'LabTest request submitted successfully' };
  }
}
