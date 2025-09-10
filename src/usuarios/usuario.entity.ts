import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Rol } from 'src/roles/rol.entity';

@Entity('usuarios') // nombre exacto de la tabla en BD
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

  @ManyToOne(() => Rol, rol => rol.usuarios, { eager: true })
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

  @Column({ default: true })
  activo: boolean;
}
