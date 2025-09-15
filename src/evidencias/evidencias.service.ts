import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evidencia } from './evidencia.entity';

@Injectable()
export class EvidenciasService {
  constructor(
    @InjectRepository(Evidencia)
    private readonly evidenciaRepo: Repository<Evidencia>,
  ) {}

  findAll(): Promise<Evidencia[]> {
    return this.evidenciaRepo.find({ relations: ['ticket', 'usuario'] });
  }

  findOne(id: number): Promise<Evidencia | null> {
    return this.evidenciaRepo.findOne({ where: { id }, relations: ['ticket', 'usuario'] });
  }

  create(data: Partial<Evidencia>): Promise<Evidencia> {
    const evidencia = this.evidenciaRepo.create(data);
    return this.evidenciaRepo.save(evidencia);
  }

  update(id: number, data: Partial<Evidencia>): Promise<any> {
    return this.evidenciaRepo.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.evidenciaRepo.delete(id);
  }
}
