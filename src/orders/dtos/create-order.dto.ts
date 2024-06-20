import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  Min,
  IsUUID,
  IsOptional,
  Length,
} from 'class-validator';

export class CartItemDTO {
  @IsNotEmpty()
  @IsUUID()
  tourId: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  numberOfPeople: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  comment?: string;
}

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  clientName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  clientSurname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(9, 15)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 50)
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  finalAmount: number;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}
