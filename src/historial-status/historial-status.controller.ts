import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HistorialStatusService } from './historial-status.service';
import { HistorialStatus } from './historial-status.entity';

@Controller('historial-status')
export class HistorialStatusController {
  constructor(private readonly historialService: HistorialStatusService) {}

  @Get()
  findAll(): Promise<HistorialStatus[]> {
    return this.historialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<HistorialStatus | null> {
    return this.historialService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<HistorialStatus>): Promise<HistorialStatus> {
    return this.historialService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<HistorialStatus>) {
    return this.historialService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.historialService.remove(id);
  }
}
