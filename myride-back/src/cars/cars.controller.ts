import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

import { Cars as CarsModel } from '@prisma/client';

@Controller()
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get('cars/:id')
  async getCarById(@Param('id') id: string): Promise<CarsModel> {
    return this.carsService.cars({ id: Number(id) });
  }
}
