import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Review } from '@prisma/client';
import { CreateReviewDTO } from './dtos/create-review.dto';
import { UpdateReviewDTO } from './dtos/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private prismaService: PrismaService) {}

  public async getAll(): Promise<Review[]> {
    return this.prismaService.review.findMany();
  }

  public async getById(id: string): Promise<Review> {
    const review = await this.prismaService.review.findUnique({
      where: { id },
    });
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    return review;
  }

  public async createReview(reviewData: CreateReviewDTO): Promise<Review> {
    return this.prismaService.review.create({ data: reviewData });
  }

  public async updateReview(
    id: string,
    reviewData: UpdateReviewDTO,
  ): Promise<Review> {
    try {
      return await this.prismaService.review.update({
        where: { id },
        data: reviewData,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Review not found');
      }
      throw error;
    }
  }

  public async deleteReview(id: string): Promise<Review> {
    try {
      return await this.prismaService.review.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Review not found');
      }
      throw error;
    }
  }
}
