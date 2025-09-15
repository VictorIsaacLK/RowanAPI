import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from './notificacion.entity';

@Injectable()
export class NotificacionesService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly notificacionRepo: Repository<Notificacion>,
  ) {}

  findAll(): Promise<Notificacion[]> {
    return this.notificacionRepo.find({ relations: ['ticket', 'usuario'] });
  }

  findOne(id: number): Promise<Notificacion | null> {
    return this.notificacionRepo.findOne({ where: { id }, relations: ['ticket', 'usuario'] });
  }

  create(data: Partial<Notificacion>): Promise<Notificacion> {
    const notificacion = this.notificacionRepo.create(data);
    return this.notificacionRepo.save(notificacion);
  }

  update(id: number, data: Partial<Notificacion>): Promise<any> {
    return this.notificacionRepo.update(id, data);
  }

  remove(id: number): Promise<any> {
    return this.notificacionRepo.delete(id);
  }
}
