import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepo: Repository<Ticket>,
  ) {}

  findAll(): Promise<Ticket[]> {
    return this.ticketRepo.find({ relations: ['tipoSistema', 'edificio', 'cliente'] });
  }

  findOne(id: number): Promise<Ticket | null> {
    return this.ticketRepo.findOne({ where: { id }, relations: ['tipoSistema', 'edificio', 'cliente'] });
  }

  create(ticketData: Partial<Ticket>): Promise<Ticket> {
    const ticket = this.ticketRepo.create(ticketData);
    return this.ticketRepo.save(ticket);
  }

  update(id: number, ticketData: Partial<Ticket>): Promise<any> {
    return this.ticketRepo.update(id, ticketData);
  }

  remove(id: number): Promise<any> {
    return this.ticketRepo.delete(id);
  }
}
