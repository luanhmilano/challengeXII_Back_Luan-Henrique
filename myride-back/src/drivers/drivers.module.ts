import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [DriversController],
  providers: [DriversService, PrismaService],
})
export class CarsModule {}
