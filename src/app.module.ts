import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AgamaModule } from './agama/agama.module';
import { typeORMAsyncConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeORMAsyncConfig),
    AgamaModule,
    UsersModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
