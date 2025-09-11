import { Module } from '@nestjs/common';
import { AsignacionesTicketsController } from './asignaciones-tickets.controller';
import { AsignacionesTicketsService } from './asignaciones-tickets.service';

@Module({
  controllers: [AsignacionesTicketsController],
  providers: [AsignacionesTicketsService]
})
export class AsignacionesTicketsModule {}
