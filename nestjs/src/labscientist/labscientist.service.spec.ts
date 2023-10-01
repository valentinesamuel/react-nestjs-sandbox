import { Test, TestingModule } from '@nestjs/testing';
import { LabscientistService } from './labscientist.service';

describe('LabscientistService', () => {
  let service: LabscientistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LabscientistService],
    }).compile();

    service = module.get<LabscientistService>(LabscientistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
