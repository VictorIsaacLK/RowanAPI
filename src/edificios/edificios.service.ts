import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Edificio } from './edificio.entity';

@Injectable()
export class EdificiosService {
  constructor(
    @InjectRepository(Edificio)
    private readonly edificioRepo: Repository<Edificio>,
  ) {}

  findAll(): Promise<Edificio[]> {
    return this.edificioRepo.find();
  }

  findOne(id: number): Promise<Edificio | null> {
    return this.edificioRepo.findOne({ where: { id } });
  }

  create(edificioData: Partial<Edificio>): Promise<Edificio> {
    const edificio = this.edificioRepo.create(edificioData);
    return this.edificioRepo.save(edificio);
  }

  update(id: number, edificioData: Partial<Edificio>): Promise<any> {
    return this.edificioRepo.update(id, edificioData);
  }

  remove(id: number): Promise<any> {
    return this.edificioRepo.delete(id);
  }
}
