import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as fs from 'fs';

import { ExtractJwt, Strategy } from 'passport-jwt';

const publicKey = fs.readFileSync(
  'libs/authentication/api-service/keys/public-key.pem',
  { encoding: 'utf8' }
);

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: publicKey,
      algorithms: ['ES256'],
      issuer: 'apps-template-authentication-service',
    });
  }

  async validate(payload: { email: string; sub: string }) {
    return { id: payload.sub, email: payload.email };
  }
}
