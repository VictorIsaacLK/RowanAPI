import { Module } from '@nestjs/common';
import { TiposSistemaController } from './tipos-sistema.controller';
import { TiposSistemaService } from './tipos-sistema.service';

@Module({
  controllers: [TiposSistemaController],
  providers: [TiposSistemaService]
})
export class TiposSistemaModule {}
