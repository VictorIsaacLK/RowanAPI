import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EvidenciasService } from './evidencias.service';
import { Evidencia } from './evidencia.entity';

@Controller('evidencias')
export class EvidenciasController {
  constructor(private readonly evidenciasService: EvidenciasService) {}

  @Get()
  findAll(): Promise<Evidencia[]> {
    return this.evidenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Evidencia | null> {
    return this.evidenciasService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Evidencia>): Promise<Evidencia> {
    return this.evidenciasService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Evidencia>) {
    return this.evidenciasService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.evidenciasService.remove(id);
  }
}
