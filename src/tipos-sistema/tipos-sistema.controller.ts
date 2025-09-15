import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TiposSistemaService } from './tipos-sistema.service';
import { TipoSistema } from './tipo-sistema.entity';

@Controller('tipos-sistema')
export class TiposSistemaController {
  constructor(private readonly tiposSistemaService: TiposSistemaService) {}

  @Get()
  findAll(): Promise<TipoSistema[]> {
    return this.tiposSistemaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TipoSistema | null> {
    return this.tiposSistemaService.findOne(id);
  }

  @Post()
  create(@Body() tipoData: Partial<TipoSistema>): Promise<TipoSistema> {
    return this.tiposSistemaService.create(tipoData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() tipoData: Partial<TipoSistema>) {
    return this.tiposSistemaService.update(id, tipoData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposSistemaService.remove(id);
  }
}
