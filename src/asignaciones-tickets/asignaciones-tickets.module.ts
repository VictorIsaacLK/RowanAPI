import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionTicket } from './asignacion-ticket.entity';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { TicketsModule } from '../tickets/tickets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AsignacionTicket]),
    UsuariosModule,
    TicketsModule,
  ],
})
export class AsignacionesTicketsModule {}
