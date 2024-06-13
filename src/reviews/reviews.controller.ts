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
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ReviewsService } from './reviews.service';
import { Review } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateReviewDTO } from './dtos/create-review.dto';
import { UpdateReviewDTO } from './dtos/update-review.dto';
import { ReviewOwnerGuard } from 'src/auth/review-owner.guard';

@Controller('reviews')
@UseGuards(JwtAuthGuard)
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
  async createReview(
    @Body() reviewData: CreateReviewDTO,
    @Req() req: Request,
  ): Promise<Review> {
    const user = req.user as { id: string };
    reviewData.userId = user.id;
    return this.reviewsService.createReview(reviewData);
  }

  @Put('/:id')
  @UseGuards(ReviewOwnerGuard)
  async updateReview(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() reviewData: UpdateReviewDTO,
  ): Promise<Review> {
    return this.reviewsService.updateReview(id, reviewData);
  }

  @Delete('/:id')
  @UseGuards(ReviewOwnerGuard)
  async deleteReview(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Review> {
    return this.reviewsService.deleteReview(id);
  }
}
