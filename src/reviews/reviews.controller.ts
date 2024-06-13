import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateReviewDTO } from './dtos/create-review.dto';
import { UpdateReviewDTO } from './dtos/update-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get('/')
  async getAll(): Promise<Review[]> {
    return this.reviewsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Review> {
    const review = await this.reviewsService.getById(id);
    if (!review) throw new NotFoundException('Review not found');
    return review;
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  async createReview(@Body() reviewData: CreateReviewDTO): Promise<Review> {
    return this.reviewsService.createReview(reviewData);
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard)
  async updateReview(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() reviewData: UpdateReviewDTO,
  ): Promise<Review> {
    const existingReview = await this.reviewsService.getById(id);
    if (!existingReview) throw new NotFoundException('Review not found');

    return this.reviewsService.updateReview(id, reviewData);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async deleteReview(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Review> {
    return this.reviewsService.deleteReview(id);
  }
}
