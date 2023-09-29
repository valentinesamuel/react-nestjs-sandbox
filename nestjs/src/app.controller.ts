import { Body, Controller, Get, Post, Res, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { interval, map } from 'rxjs';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // performTest(@Body() body: { name: string }): void {
  //   return this.appService.getHello();
  // }

  // @Sse('sse')
  @Post('lab')
  sse(@Body() body: { name: string }, @Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const eventData = `data:{ "message": "Test performed by ${body.name}"}\n\n`;

    // Send the SSE event data to the client
    res.write(eventData);

    // End the response to indicate that the event has been sent
    res.end();
    console.log(eventData);
    // res.send({ hello: eventData });
  }
}
