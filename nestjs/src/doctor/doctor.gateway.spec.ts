import { Test, TestingModule } from '@nestjs/testing';
import { DoctorGateway } from './doctor.gateway';
import { DoctorService } from './doctor.service';

describe('DoctorGateway', () => {
  let gateway: DoctorGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorGateway, DoctorService],
    }).compile();

    gateway = module.get<DoctorGateway>(DoctorGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
