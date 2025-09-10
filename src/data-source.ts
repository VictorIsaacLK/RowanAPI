import { DataSource } from 'typeorm';
import { Usuario } from './usuarios/usuario.entity';
import { Rol } from './roles/rol.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'tickets_pwa',
  entities: [Usuario, Rol],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // <--- importante
});
