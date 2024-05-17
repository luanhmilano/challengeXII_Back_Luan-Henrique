import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDriverDTO {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  referralCode: string;

  @IsNotEmpty()
  carType: string;
}
