import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Rol } from './rol.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll(): Promise<Rol[]> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Rol | null> {
    return this.rolesService.findOne(+id);
  }

  @Post()
  create(@Body('nombre') nombre: string): Promise<Rol> {
    return this.rolesService.create(nombre);
  }
}
