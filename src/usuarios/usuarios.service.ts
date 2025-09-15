import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepo.find({ relations: ['rol'] });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepo.findOne({ where: { id } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  create(usuarioData: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.usuarioRepo.create(usuarioData);
    return this.usuarioRepo.save(usuario);
  }

  update(id: number, usuarioData: Partial<Usuario>): Promise<any> {
    return this.usuarioRepo.update(id, usuarioData);
  }

  remove(id: number): Promise<any> {
    return this.usuarioRepo.delete(id);
  }

  async findByEmail(correo: string): Promise<Usuario | null> {
    return this.usuarioRepo.findOne({ where: { correo } });
  }
}
