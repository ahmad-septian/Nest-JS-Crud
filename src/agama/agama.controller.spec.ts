import { Test, TestingModule } from '@nestjs/testing';
import { AgamaController } from './agama.controller';

describe('AgamaController', () => {
  let controller: AgamaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgamaController],
    }).compile();

    controller = module.get<AgamaController>(AgamaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
