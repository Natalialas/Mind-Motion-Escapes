import { Module } from '@nestjs/common';
import { CartItemsController } from './cartitems.controller';
import { CartItemsService } from './cartitems.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CartItemsController],
  providers: [CartItemsService],
  imports: [PrismaModule],
})
export class CartitemsModule {}
