import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { DriverModule } from './drivers/drivers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), CarsModule, DriverModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
