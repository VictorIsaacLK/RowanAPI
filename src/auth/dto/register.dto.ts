import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellidos: string;

  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @MinLength(6)
  contraseña: string;
}
