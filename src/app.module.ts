import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AgamaModule } from './agama/agama.module';
import { typeORMAsyncConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { KeycloakModule } from './keycloak/keycloak.module';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { KeycloakService } from './keycloak/keycloak.service';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeORMAsyncConfig),
    AgamaModule,
    UsersModule,
    RoleModule,
    KeycloakModule,
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakService,
      imports: [KeycloakModule],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
