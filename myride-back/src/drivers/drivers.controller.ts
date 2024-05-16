import { Controller, Post, Body } from '@nestjs/common';
import { DriversService } from './drivers.service';

import { Driver as DriverModel } from '@prisma/client';

@Controller()
export class DriversController {
  constructor(private readonly driverService: DriversService) {}

  @Post('driver')
  async newDriver(
    @Body()
    driverData: {
      firstName: string;
      lastName: string;
      email: string;
      country: string;
      city: string;
      referralCode: string;
      carType: string;
    },
  ): Promise<DriverModel> {
    return this.driverService.createDriver(driverData);
  }
}
