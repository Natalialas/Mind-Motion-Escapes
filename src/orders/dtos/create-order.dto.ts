// create-order.dto.ts

import { IsString, IsUUID, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class TourDTO {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  clientName: string;

  @IsNotEmpty()
  @IsString()
  clientSurname: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @ValidateNested({ each: true })
  @Type(() => TourDTO)
  tours: TourDTO[];

  finalAmount: number;
  comment?: string;
  userId?: string;
}
