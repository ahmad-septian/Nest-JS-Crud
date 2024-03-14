import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
} from 'nest-keycloak-connect';

import { Injectable } from '@nestjs/common';

@Injectable()
export class KeycloakService implements KeycloakConnectOptionsFactory {
  public createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: process.env.SSO_AUTH_URL,
      realm: process.env.SSO_REALM,
      clientId: process.env.SSO_CLIENT_ID,
      secret: process.env.SSO_CLIENT_SECRET,
    };
  }
}
