import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Driver, Prisma } from '@prisma/client';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  async createDriver(data: Prisma.DriverCreateInput): Promise<Driver> {
    const checkEmail = await this.prisma.driver.findUnique({
      where: { email: data.email },
    });

    if (checkEmail) {
      throw new ConflictException('Email já existente.');
    }

    return this.prisma.driver.create({
      data,
    });
  }
}
