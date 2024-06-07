import { Module } from '@nestjs/common';
import { CartitemsService } from './cartitems.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CartitemsService],
  imports: [PrismaModule],
})
export class CartitemsModule {}
