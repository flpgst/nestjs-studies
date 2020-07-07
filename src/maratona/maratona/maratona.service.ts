import { Injectable } from '@nestjs/common';
import {Repository, UpdateResult, DeleteResult} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm';
import {Maratona} from '../maratona.entity';


@Injectable()
export class MaratonaService {
  constructor(
    @InjectRepository(Maratona)
    private maratonaRepository: Repository<Maratona>
  ) { }

  async findAll(): Promise<Maratona[]> {
    return await this.maratonaRepository.find();
  }

  async create(maratona: Maratona): Promise<Maratona> {
    return await this.maratonaRepository.save(maratona);
  }

  async update(maratona: Maratona): Promise<UpdateResult> {
    return await this.maratonaRepository.update(maratona.id, maratona);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.maratonaRepository.delete(id)
  }
}
