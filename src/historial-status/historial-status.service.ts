import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialStatus } from './historial-status.entity';

@Injectable()
export class HistorialStatusService {
  constructor(
    @InjectRepository(HistorialStatus)
    private readonly historialRepo: Repository<HistorialStatus>,
  ) {}

  findAll(): Promise<HistorialStatus[]> {
    return this.historialRepo.find({ relations: ['ticket', 'usuario'] });
  }

  findOne(id: number): Promise<HistorialStatus | null> {
    return this.historialRepo.findOne({ where: { id }, relations: ['ticket', 'usuario'] });
  }

  create(data: Partial<HistorialStatus>): Promise<HistorialStatus> {
    const historial = this.historialRepo.create(data);
    return this.historialRepo.save(historial);
  }

  update(id: number, data: Partial<HistorialStatus>): Promise<any> {
    return this.historialRepo.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.historialRepo.delete(id);
  }
}
