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
import { OrdersService } from './orders.service';
import { Order } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('/')
  async getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @Get('/:id')
  async getOrderById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Order | null> {
    const order = await this.ordersService.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  @Post('/')
  async createOrder(@Body() orderData: CreateOrderDTO): Promise<Order> {
    return this.ordersService.createOrder(orderData);
  }

  @Put('/:id')
  @UseGuards(JwtAuthGuard, AdminAuthGuard)
  async updateOrder(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() orderData: Order,
  ): Promise<Order> {
    return this.ordersService.updateOrder(id, orderData);
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard, AdminAuthGuard)
  async deleteOrder(@Param('id', ParseUUIDPipe) id: string): Promise<Order> {
    return this.ordersService.deleteOrder(id);
  }
}
