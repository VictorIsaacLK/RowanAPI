import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';
import { UsuariosModule } from '../usuarios/usuarios.module'; // importamos usuarios para la relación

@Module({
  imports: [
    TypeOrmModule.forFeature([Ticket]),
    UsuariosModule // para poder usar Usuario en relaciones
  ],
  controllers: [],
  providers: [],
})
export class TicketsModule {}
