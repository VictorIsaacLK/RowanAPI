import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuariosService.findOne(id);
  }

  @Post()
  create(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.create(usuario);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.update(id, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usuariosService.remove(id);
  }
}
