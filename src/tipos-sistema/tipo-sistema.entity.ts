import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';

@Entity('tipos_sistema')
export class TipoSistema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @OneToMany(() => Ticket, ticket => ticket.tipoSistema)
  tickets: Ticket[];
}
