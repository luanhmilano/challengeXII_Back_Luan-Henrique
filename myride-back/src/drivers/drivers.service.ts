import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Driver, Prisma } from '@prisma/client';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  async createDriver(data: Prisma.DriverCreateInput): Promise<Driver> {
    return this.prisma.driver.create({
      data,
    });
  }
}
