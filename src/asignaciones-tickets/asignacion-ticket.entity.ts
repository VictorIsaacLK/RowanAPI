import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Ticket } from 'src/tickets/ticket.entity';
import { Usuario } from 'src/usuarios/usuario.entity';
@Entity('asignaciones_tickets')
export class AsignacionTicket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ticket, ticket => ticket.asignaciones, { eager: true })
  ticket: Ticket;

  @ManyToOne(() => Usuario, usuario => usuario.asignacionesEmpleado, { eager: true })
  empleado: Usuario;

  @ManyToOne(() => Usuario, usuario => usuario.asignacionesJefe, { eager: true })
  jefe: Usuario;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_asignacion: Date;
}
