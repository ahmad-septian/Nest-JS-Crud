import { Module } from '@nestjs/common';
import { AgamaService } from './agama.service';
import { AgamaController } from './agama.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agama } from './agama.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agama])],
  providers: [AgamaService],
  controllers: [AgamaController],
})
export class AgamaModule {}
