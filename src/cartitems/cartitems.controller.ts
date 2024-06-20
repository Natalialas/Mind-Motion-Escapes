import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CartItemsService } from './cartitems.service';
import { CartItem } from '@prisma/client';

@Controller('cartitems')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Get('/')
  async getAllCartItems(): Promise<CartItem[]> {
    return this.cartItemsService.getAllCartItems();
  }

  @Get('/:id')
  async getCartItemById(@Param('id') id: string): Promise<CartItem | null> {
    const cartItem = await this.cartItemsService.getCartItemById(id);
    if (!cartItem) {
      throw new NotFoundException('CartItem not found');
    }
    return cartItem;
  }

  @Post('/')
  async createCartItem(
    @Body() cartItemData: Omit<CartItem, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<CartItem> {
    return this.cartItemsService.createCartItem(cartItemData);
  }

  @Put('/:id')
  async updateCartItem(
    @Param('id') id: string,
    @Body() cartItemData: Omit<CartItem, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<CartItem> {
    return this.cartItemsService.updateCartItem(id, cartItemData);
  }

  @Delete('/:id')
  async deleteCartItem(@Param('id') id: string): Promise<CartItem> {
    return this.cartItemsService.deleteCartItem(id);
  }
}
