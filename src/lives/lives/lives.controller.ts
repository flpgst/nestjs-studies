import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {Live} from '../live.entity';
import {LivesService} from './lives.service';

@Controller('lives')
export class LivesController {
  constructor(private livesService: LivesService) {}
  @Get()
  index(): Promise<Live[]> {
    return this.livesService.findAll();
  }

  @Post('create')
  async create(@Body() liveData: Live): Promise<any> {
    return this.livesService.create(liveData)
  }

  @Put(':id/update')
  async update(@Param('id') id: number, @Body() liveData: Live): Promise<any> {
    liveData.id = Number(id);
    console.log('Update #', liveData.id);
    return this.livesService.update(liveData)
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: number): Promise<any> {
    return this.livesService.delete(id)
  }
}
