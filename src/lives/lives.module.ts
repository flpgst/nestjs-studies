import { Module } from '@nestjs/common';
import { LivesService } from './lives/lives.service';
import { LivesController } from './lives/lives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Live } from './live.entity'


@Module({
  imports: [
    TypeOrmModule.forFeature([Live])
  ],
  providers: [LivesService],
  controllers: [LivesController]
})
export class LivesModule {}
