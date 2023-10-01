import { Test, TestingModule } from '@nestjs/testing';
import { LabscientistGateway } from './labscientist.gateway';
import { LabscientistService } from './labscientist.service';

describe('LabscientistGateway', () => {
  let gateway: LabscientistGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabscientistGateway, LabscientistService],
    }).compile();

    gateway = module.get<LabscientistGateway>(LabscientistGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
