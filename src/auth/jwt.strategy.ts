import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'mi_secreto_super_seguro', // ⚠️ usar variable de entorno
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, correo: payload.correo, rol: payload.rol };
  }
}
