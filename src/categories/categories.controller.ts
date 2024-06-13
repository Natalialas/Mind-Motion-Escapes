import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category, Tour } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('/')
  async getAll(): Promise<Category[]> {
    return this.categoriesService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Category> {
    const category = await this.categoriesService.getById(id);
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  @Get('/:id/tours')
  async getToursByCategoryId(@Param('id') id: string): Promise<Tour[]> {
    const tours = await this.categoriesService.getToursByCategoryId(id);
    return tours;
  }
}
