import { IsNotEmpty } from 'class-validator';
export class CreateAddressDto {
  @IsNotEmpty()
  line1: string;

  @IsNotEmpty()
  line2: string;

  @IsNotEmpty()
  suburb: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  province: string;

  @IsNotEmpty()
  postalCode: string;

  @IsNotEmpty()
  country: string;
}
