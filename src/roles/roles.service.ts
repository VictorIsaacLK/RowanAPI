import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepo: Repository<Rol>,
  ) {}

  findAll(): Promise<Rol[]> {
    return this.rolRepo.find();
  }

  findOne(id: number): Promise<Rol | null> {
    return this.rolRepo.findOne({ where: { id } });
  }

  create(rolData: Partial<Rol>): Promise<Rol> {
    const rol = this.rolRepo.create(rolData);
    return this.rolRepo.save(rol);
  }

  update(id: number, rolData: Partial<Rol>): Promise<any> {
    return this.rolRepo.update(id, rolData);
  }

  remove(id: number): Promise<any> {
    return this.rolRepo.delete(id);
  }
}
