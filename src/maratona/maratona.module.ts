import { Module } from '@nestjs/common';
import { MaratonaService } from './maratona/maratona.service';
import { MaratonaController } from './maratona/maratona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from './maratona.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Maratona])
  ],
  providers: [MaratonaService],
  controllers: [MaratonaController]
})
export class MaratonaModule {}
