import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {Maratona} from '../maratona.entity';
import {MaratonaService} from './maratona.service';

@Controller('maratona')
export class MaratonaController {
  constructor(private maratonaService: MaratonaService) {}
  @Get()
  index(): Promise<Maratona[]> {
    return this.maratonaService.findAll();
  }

  @Post('create')
  async create(@Body() maratonaData: Maratona): Promise<any> {
    return this.maratonaService.create(maratonaData)
  }

  @Put(':id/update')
  async update(@Param('id') id: number, @Body() maratonaData: Maratona): Promise<any> {
    maratonaData.id = Number(id);
    console.log('Update #', maratonaData.id);
    return this.maratonaService.update(maratonaData)
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: number): Promise<any> {
    return this.maratonaService.delete(id)
  }
}
