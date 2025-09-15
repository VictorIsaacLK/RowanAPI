import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialStatus } from './historial-status.entity';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { TicketsModule } from '../tickets/tickets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([HistorialStatus]),
    UsuariosModule,
    TicketsModule,
  ],
})
export class HistorialStatusModule {}
