import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private rolesRepository: Repository<Rol>,
  ) {}

  findAll(): Promise<Rol[]> {
    return this.rolesRepository.find();
  }

  findOne(id: number): Promise<Rol | null> {
    return this.rolesRepository.findOne({ where: { id } });
  }

  create(nombre: string): Promise<Rol> {
    const rol = this.rolesRepository.create({ nombre });
    return this.rolesRepository.save(rol);
  }
}
