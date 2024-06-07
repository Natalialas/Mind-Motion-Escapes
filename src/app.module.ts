import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ToursModule } from './tours/tours.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrdersModule } from './orders/orders.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { CartitemsController } from './cartitems/cartitems.controller';
import { CartitemsModule } from './cartitems/cartitems.module';

@Module({
  imports: [
    ToursModule,
    PrismaModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    OrdersModule,
    CartItemsModule,
    CartitemsModule,
  ],
  controllers: [AppController, CartitemsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
