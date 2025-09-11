import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Rol } from '../roles/rol.entity';
import { Ticket } from '../tickets/ticket.entity';
import { AsignacionTicket } from '../asignaciones-tickets/asignacion-ticket.entity';
import { Evidencia } from '../evidencias/evidencia.entity';
import { HistorialStatus } from '../historial-status/historial-status.entity';
import { Notificacion } from '../notificaciones/notificacion.entity';

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

  @ManyToOne(() => Rol, rol => rol.usuarios)
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

  @Column({ default: true })
  activo: boolean;

  // Relaciones
  @OneToMany(() => Ticket, ticket => ticket.cliente)
  ticketsCreados: Ticket[];

  @OneToMany(() => AsignacionTicket, asign => asign.empleado)
  asignacionesComoEmpleado: AsignacionTicket[];

  @OneToMany(() => AsignacionTicket, asign => asign.jefe)
  asignacionesComoJefe: AsignacionTicket[];

  @OneToMany(() => Evidencia, evidencia => evidencia.usuario)
  evidencias: Evidencia[];

  @OneToMany(() => HistorialStatus, historial => historial.usuario)
  historialStatus: HistorialStatus[];

  @OneToMany(() => Notificacion, notificacion => notificacion.usuario)
  notificaciones: Notificacion[];
}
