import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { TipoSistema } from '../tipos-sistema/tipo-sistema.entity';
import { Edificio } from '../edificios/edificio.entity';
import { AsignacionTicket } from '../asignaciones-tickets/asignacion-ticket.entity';
import { Evidencia } from '../evidencias/evidencia.entity';
import { HistorialStatus } from '../historial-status/historial-status.entity';
import { Notificacion } from '../notificaciones/notificacion.entity';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  codigo_ticket: string;

  @ManyToOne(() => TipoSistema, tipo => tipo.tickets)
  @JoinColumn({ name: 'tipo_sistema_id' })
  tipoSistema: TipoSistema;

  @ManyToOne(() => Edificio, edificio => edificio.tickets)
  @JoinColumn({ name: 'edificio_id' })
  edificio: Edificio;

  @ManyToOne(() => Usuario, usuario => usuario.ticketsCreados)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Usuario;

  @Column('text')
  descripcion: string;

  @Column({ type: 'enum', enum: ['pendiente','revision','finalizado'], default: 'pendiente' })
  status: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  fecha_actualizacion: Date;

  @OneToMany(() => AsignacionTicket, asign => asign.ticket)
  asignaciones: AsignacionTicket[];

  @OneToMany(() => Evidencia, evidencia => evidencia.ticket)
  evidencias: Evidencia[];

  @OneToMany(() => HistorialStatus, historial => historial.ticket)
  historialStatus: HistorialStatus[];

  @OneToMany(() => Notificacion, notificacion => notificacion.ticket)
  notificaciones: Notificacion[];
}
