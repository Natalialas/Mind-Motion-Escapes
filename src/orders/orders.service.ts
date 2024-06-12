import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Order } from '@prisma/client';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public async getAllOrders(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: {
        items: true,
      },
    });
  }

  public async getOrderById(id: string): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: {
        items: true,
      },
    });
  }

  public async createOrder(orderData: CreateOrderDTO): Promise<Order> {
    const { cartItems, userId, ...rest } = orderData;
    try {
      return await this.prismaService.order.create({
        data: {
          ...rest,
          userId: userId,
          items: {
            create: cartItems.map((cartItem) => ({
              ...cartItem,
              orderId: '',
              numberOfPeople: 1,
              price: 0,
              comment: '',
            })),
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Order with the same ID already exists');
      }
      throw error;
    }
  }

  public async updateOrder(id: string, orderData: Order): Promise<Order> {
    try {
      return await this.prismaService.order.update({
        where: { id },
        data: orderData,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Order not found');
      }
      if (error.code === 'P2002') {
        throw new ConflictException('Order with the same ID already exists');
      }
      throw error;
    }
  }

  public async deleteOrder(id: string): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }
}
