import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { RolesService } from 'src/roles/roles.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
    private rolesService: RolesService,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepo.find({ relations: ['rol'] });
  }

  async findOne(id: number): Promise<Usuario> {
    const user = await this.usuarioRepo.findOne({ where: { id }, relations: ['rol'] });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  async create(createDto: CreateUsuarioDto): Promise<Usuario> {
    const rol = await this.rolesService.findOne(createDto.rol_id);

    const hashedPassword = await bcrypt.hash(createDto.contraseña, 10);

    const usuario = this.usuarioRepo.create({
      ...createDto,
      contraseña: hashedPassword,
      rol,
    });

    return this.usuarioRepo.save(usuario);
  }

  async update(id: number, updateDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);

    if (updateDto.rol_id) {
      const rol = await this.rolesService.findOne(updateDto.rol_id);
      usuario.rol = rol;
    }

    if (updateDto.contraseña) {
      updateDto.contraseña = await bcrypt.hash(updateDto.contraseña, 10);
    }

    Object.assign(usuario, updateDto);
    return this.usuarioRepo.save(usuario);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepo.delete(id);
  }

  async findByEmail(correo: string): Promise<Usuario | null> {
    return this.usuarioRepo.findOne({ where: { correo }, relations: ['rol'] });
  }
}
