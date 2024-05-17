import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDTO } from './CreateDriverDTO';

import { Driver as DriverModel } from '@prisma/client';

@Controller()
export class DriversController {
  constructor(private readonly driverService: DriversService) {}

  @Post('driver')
  @UsePipes(new ValidationPipe({ transform: true }))
  async newDriver(
    @Body() createDriverDTO: CreateDriverDTO,
  ): Promise<DriverModel> {
    return this.driverService.createDriver(createDriverDTO);
  }
}
