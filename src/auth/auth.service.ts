import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Usuario } from 'src/usuarios/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validateUser(correo: string, password: string): Promise<Usuario> {
    const usuario = await this.usuariosService.findByEmail(correo);
    if (!usuario) throw new UnauthorizedException('Credenciales inválidas');

    const match = await bcrypt.compare(password, usuario.contraseña);
    if (!match) throw new UnauthorizedException('Credenciales inválidas');

    return usuario;
  }

  async login(usuario: Usuario) {
    const payload = { sub: usuario.id, correo: usuario.correo, rol: usuario.rol.nombre };
    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        id: usuario.id,
        correo: usuario.correo,
        rol: usuario.rol.nombre,
      },
    };
  }
}
