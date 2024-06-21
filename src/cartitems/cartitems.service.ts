import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CartItem } from '@prisma/client';

@Injectable()
export class CartItemsService {
  constructor(private prismaService: PrismaService) {}

  public async getAllCartItems(): Promise<CartItem[]> {
    return this.prismaService.cartItem.findMany({
      include: {
        tour: true,
      },
    });
  }

  public async getCartItemById(id: string): Promise<CartItem | null> {
    return this.prismaService.cartItem.findUnique({
      where: { id },
      include: {
        tour: true,
      },
    });
  }

  public async createCartItem(
    cartItemData: Omit<CartItem, 'id' | 'createdAt' | 'updatedAt'> & {
      tourId: string;
    },
  ): Promise<CartItem> {
    const { tourId, ...rest } = cartItemData;

    try {
      return await this.prismaService.cartItem.create({
        data: {
          ...rest,
          tour: {
            connect: { id: tourId },
          },
        },
        include: {
          tour: true,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('CartItem with the same ID already exists');
      }
      throw error;
    }
  }

  public async updateCartItem(
    id: string,
    cartItemData: Omit<CartItem, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<CartItem> {
    try {
      return await this.prismaService.cartItem.update({
        where: { id },
        data: cartItemData,
        include: {
          tour: true,
        },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('CartItem not found');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('CartItem with the same ID already exists');
      }
      throw error;
    }
  }

  public async deleteCartItem(id: string): Promise<CartItem> {
    return this.prismaService.cartItem.delete({
      where: { id },
      include: {
        tour: true,
      },
    });
  }
}
