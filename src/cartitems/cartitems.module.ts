import { Module } from '@nestjs/common';
import { CartitemsService } from './cartitems.service';

@Module({
  providers: [CartitemsService]
})
export class CartitemsModule {}
