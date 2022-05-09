import { IsNotEmpty } from 'class-validator';

export class UpdateAddressDto {
  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  line1: string;

  @IsNotEmpty()
  line2: string;

  @IsNotEmpty()
  postalCode: string;

  @IsNotEmpty()
  province: string;

  @IsNotEmpty()
  suburb: string;
}
