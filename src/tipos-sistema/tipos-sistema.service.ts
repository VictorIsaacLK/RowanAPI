import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoSistema } from './tipo-sistema.entity';

@Injectable()
export class TiposSistemaService {
  constructor(
    @InjectRepository(TipoSistema)
    private readonly tipoSistemaRepo: Repository<TipoSistema>,
  ) {}

  findAll(): Promise<TipoSistema[]> {
    return this.tipoSistemaRepo.find({ relations: ['tickets'] });
  }

  findOne(id: number): Promise<TipoSistema | null> {
    return this.tipoSistemaRepo.findOne({ where: { id }, relations: ['tickets'] });
  }

  create(tipoData: Partial<TipoSistema>): Promise<TipoSistema> {
    const tipo = this.tipoSistemaRepo.create(tipoData);
    return this.tipoSistemaRepo.save(tipo);
  }

  update(id: number, tipoData: Partial<TipoSistema>): Promise<any> {
    return this.tipoSistemaRepo.update(id, tipoData);
  }

  remove(id: number): Promise<any> {
    return this.tipoSistemaRepo.delete(id);
  }
}
