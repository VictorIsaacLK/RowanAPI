import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuarios/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService
  ) {}

  async validateUser(correo: string, contraseña: string): Promise<Usuario> {
    const user = await this.usuariosService.findByEmail(correo);
    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
    if (!isPasswordValid) throw new UnauthorizedException('Contraseña incorrecta');

    return user;
  }

  async login(user: Usuario) {
    const payload = {
      id: user.id,
      correo: user.correo,
      rol: user.rol.nombre,
      nombre: user.nombre,
      apellidos: user.apellidos,
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario: payload, // devuelve info del usuario junto con el token
    };
  }

  async hashPassword(plainPassword: string): Promise<string> {
    const salt = Number(process.env.BCRYPT_SALT) || 10;
    return bcrypt.hash(plainPassword, salt);
  }
}
