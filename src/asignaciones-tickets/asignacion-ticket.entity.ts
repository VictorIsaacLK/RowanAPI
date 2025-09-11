import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Ticket } from '../tickets/ticket.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('asignaciones_tickets')
export class AsignacionTicket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ticket, ticket => ticket.asignaciones)
  @JoinColumn({ name: 'ticket_id' })
  ticket: Ticket;

  @ManyToOne(() => Usuario, usuario => usuario.asignacionesComoEmpleado)
  @JoinColumn({ name: 'empleado_id' })
  empleado: Usuario;

  @ManyToOne(() => Usuario, usuario => usuario.asignacionesComoJefe)
  @JoinColumn({ name: 'jefe_id' })
  jefe: Usuario;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_asignacion: Date;
}
