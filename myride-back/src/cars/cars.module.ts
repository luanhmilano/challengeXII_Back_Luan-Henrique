import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CarsController],
  providers: [CarsService, PrismaService],
})
export class CarsModule {}
