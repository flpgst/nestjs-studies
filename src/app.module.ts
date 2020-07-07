import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivesModule } from './lives/lives.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MaratonaModule } from './maratona/maratona.module';


@Module({
  imports: [
    LivesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    MaratonaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
