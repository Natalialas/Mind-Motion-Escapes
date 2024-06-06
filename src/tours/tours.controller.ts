import {
  Controller,
  Get,
  Param,
  NotFoundException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ToursService } from './tours.service';
import { Tour } from '@prisma/client';

@Controller('tours')
export class ToursController {
  constructor(private toursService: ToursService) {}

  @Get()
  async getAll(): Promise<Tour[]> {
    return this.toursService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Tour> {
    const tour = await this.toursService.getById(id);
    if (!tour) throw new NotFoundException('Tour not found');
    return tour;
  }
}
