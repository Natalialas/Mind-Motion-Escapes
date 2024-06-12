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
import { ToursService } from './tours.service';
import { Tour } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { CreateTourDTO } from './dtos/create-tour.dto';
import { UpdateTourDTO } from './dtos/update-tour.dto';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @Get('/')
  async getAll(): Promise<Tour[]> {
    return this.toursService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Tour> {
    const tour = await this.toursService.getById(id);
    if (!tour) throw new NotFoundException('Tour not found');
    return tour;
  }

  @Post('/')
  @UseGuards(JwtAuthGuard, AdminAuthGuard)
  async createTour(@Body() tourData: CreateTourDTO): Promise<Tour> {
    return this.toursService.createTour(tourData);
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard, AdminAuthGuard)
  async updateTour(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() tourData: UpdateTourDTO,
  ) {
    if (!(await this.toursService.getById(id)))
      throw new NotFoundException('Tour not found');
    return this.toursService.updateTour(id, tourData);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard, AdminAuthGuard)
  async deleteTour(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Tour> {
    return this.toursService.deleteTour(id);
  }

  @Get('/search/:phrase')
  async searchTours(@Param('phrase') phrase: string): Promise<Tour[]> {
    return this.toursService.searchToursByPhrase(phrase);
  }
}
