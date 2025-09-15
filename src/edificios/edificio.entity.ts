import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from 'src/tickets/ticket.entity';

@Entity('edificios')
export class Edificio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 255 })
  direccion: string;

  @OneToMany(() => Ticket, ticket => ticket.edificio)
  tickets: Ticket[];
}
