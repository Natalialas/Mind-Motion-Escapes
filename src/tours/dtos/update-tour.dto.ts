import { IsString, IsNumber, Min, IsUUID, IsOptional } from 'class-validator';

export class UpdateTourDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  duration?: number;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsOptional()
  @IsUUID()
  categoryId?: string;
}
