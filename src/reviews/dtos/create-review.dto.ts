import { IsString, IsInt, Min, Max, IsUUID } from 'class-validator';

export class CreateReviewDTO {
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  @Min(20)
  @Max(300)
  comment: string;

  @IsUUID()
  userId: string;

  @IsUUID()
  tourId: string;
}
