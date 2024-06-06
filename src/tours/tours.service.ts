import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Tour } from '@prisma/client';

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
}
