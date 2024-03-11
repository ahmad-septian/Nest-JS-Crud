import { Test, TestingModule } from '@nestjs/testing';
import { AgamaService } from './agama.service';

describe('AgamaService', () => {
  let service: AgamaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgamaService],
    }).compile();

    service = module.get<AgamaService>(AgamaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
