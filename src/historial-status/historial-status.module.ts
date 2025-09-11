import { Module } from '@nestjs/common';
import { HistorialStatusController } from './historial-status.controller';
import { HistorialStatusService } from './historial-status.service';

@Module({
  controllers: [HistorialStatusController],
  providers: [HistorialStatusService]
})
export class HistorialStatusModule {}
