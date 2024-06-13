import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Category, Tour } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Category[]> {
    return this.prismaService.category.findMany();
  }

  public async getById(id: string): Promise<Category> {
    const category = await this.prismaService.category.findUnique({
      where: { id },
    });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  public async getToursByCategoryId(categoryId: string): Promise<Tour[]> {
    return this.prismaService.category
      .findUnique({
        where: { id: categoryId },
      })
      .tours();
  }
}
