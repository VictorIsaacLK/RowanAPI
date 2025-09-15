import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoSistema } from './tipo-sistema.entity';
import { TicketsModule } from '../tickets/tickets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TipoSistema]),
    TicketsModule
  ],
})
export class TiposSistemaModule {}
