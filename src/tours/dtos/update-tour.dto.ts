import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsUUID,
  IsOptional,
} from 'class-validator';

export class UpdateTourDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  duration: number;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
