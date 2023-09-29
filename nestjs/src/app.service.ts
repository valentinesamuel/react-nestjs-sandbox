import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  performTest(name: string): string {
    return `Perform Test For Patient ${name}!!`;
  }
}
