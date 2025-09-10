import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  async create(usuario: Partial<Usuario>): Promise<Usuario> {
    // encriptar contraseña antes de guardar
    const salt = await bcrypt.genSalt(10);
    usuario.contraseña = await bcrypt.hash(usuario.contraseña!, salt);

    const newUser = this.usuariosRepository.create(usuario);
    return this.usuariosRepository.save(newUser);
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuariosRepository.update(id, usuario);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }

  async findByEmail(correo: string): Promise<Usuario | null> {
  return this.usuariosRepository.findOne({ where: { correo } });
}

}
