import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { Notificacion } from './notificacion.entity';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly notificacionesService: NotificacionesService) {}

  @Get()
  findAll(): Promise<Notificacion[]> {
    return this.notificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Notificacion | null> {
    return this.notificacionesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Notificacion>): Promise<Notificacion> {
    return this.notificacionesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Notificacion>) {
    return this.notificacionesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.notificacionesService.remove(id);
  }
}
