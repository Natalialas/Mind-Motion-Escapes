import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Tour } from '@prisma/client';
import { CreateTourDTO } from './dtos/create-tour.dto';
import { UpdateTourDTO } from './dtos/update-tour.dto';

@Injectable()
export class ToursService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Tour[]> {
    return this.prismaService.tour.findMany();
  }

  public getById(id: string): Promise<Tour | null> {
    return this.prismaService.tour.findUnique({
      where: { id },
    });
  }

  public async createTour(tourData: CreateTourDTO): Promise<Tour> {
    try {
      return await this.prismaService.tour.create({ data: tourData });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Tour with the same ID already exists');
      }
      throw error;
    }
  }

  public async updateTour(id: string, tourData: UpdateTourDTO): Promise<Tour> {
    try {
      return await this.prismaService.tour.update({
        where: { id },
        data: tourData,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Tour not found');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Tour with the same ID already exists');
      }
      throw error;
    }
  }

  public async deleteTour(id: string): Promise<Tour> {
    return this.prismaService.tour.delete({
      where: { id },
    });
  }

  public async searchToursByPhrase(phrase: string): Promise<Tour[]> {
    return this.prismaService.tour.findMany({
      where: {
        name: {
          contains: phrase,
        },
      },
    });
  }
}
