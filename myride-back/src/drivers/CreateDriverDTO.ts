import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateDriverDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  country: string;

  @IsNotEmpty()
  city: string;

  @IsEmpty()
  referralCode: string;

  @IsEmpty()
  carType: string;
}
