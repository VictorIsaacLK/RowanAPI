import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Rol } from 'src/roles/rol.entity';
import { Ticket } from 'src/tickets/ticket.entity';
import { AsignacionTicket } from 'src/asignaciones-tickets/asignacion-ticket.entity';
import { Evidencia } from 'src/evidencias/evidencia.entity';
import { HistorialStatus } from 'src/historial-status/historial-status.entity';
import { Notificacion } from 'src/notificaciones/notificacion.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 150 })
  apellidos: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({ length: 150, unique: true })
  correo: string;

  @Column({ length: 255 })
  contraseña: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

  @Column({ default: true })
  activo: boolean;

  @ManyToOne(() => Rol, rol => rol.usuarios, { eager: true })
  rol: Rol;

  @OneToMany(() => Ticket, ticket => ticket.cliente)
  ticketsCliente: Ticket[];

  @OneToMany(() => AsignacionTicket, asignacion => asignacion.empleado)
  asignacionesEmpleado: AsignacionTicket[];

  @OneToMany(() => AsignacionTicket, asignacion => asignacion.jefe)
  asignacionesJefe: AsignacionTicket[];

  @OneToMany(() => Evidencia, evidencia => evidencia.usuario)
  evidencias: Evidencia[];

  @OneToMany(() => HistorialStatus, historial => historial.usuario)
  historialStatus: HistorialStatus[];

  @OneToMany(() => Notificacion, notificacion => notificacion.usuario)
  notificaciones: Notificacion[];
}
