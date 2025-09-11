import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @MinLength(6)
  contraseña: string;
}
