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
  create(@Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.create(usuarioData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() usuarioData: Partial<Usuario>) {
    return this.usuariosService.update(id, usuarioData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(id);
  }
}
