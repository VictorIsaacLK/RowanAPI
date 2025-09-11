import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('historial_status')
export class HistorialStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ticket, ticket => ticket.historialStatus)
  @JoinColumn({ name: 'ticket_id' })
  ticket: Ticket;

  @Column({ type: 'enum', enum: ['pendiente','revision','finalizado'], nullable: true })
  status_anterior: string;

  @Column({ type: 'enum', enum: ['pendiente','revision','finalizado'], nullable: true })
  status_nuevo: string;

  @ManyToOne(() => Usuario, usuario => usuario.historialStatus)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_cambio: Date;
}
