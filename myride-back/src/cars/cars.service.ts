import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cars, Prisma } from '@prisma/client';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}

  async cars(
    carsWhereUniqueInput: Prisma.CarsWhereUniqueInput,
  ): Promise<Cars | null> {
    return this.prisma.cars.findUnique({
      where: carsWhereUniqueInput,
    });
  }
}
