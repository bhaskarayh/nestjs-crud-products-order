import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './shared/services/database-connection.service';
import { ProductsEntity } from './products/products.entity';
import { ProductTypesEntity } from './product-types/product-types.entity';
import { ProductTypesController } from './product-types/product-types.controller';
import { ProductTypesService } from './product-types/product_types.service';
import { OrdersEntity } from './orders/orders.entity';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    TypeOrmModule.forFeature([
      ProductsEntity,
      ProductTypesEntity,
      OrdersEntity,
    ]),
  ],
  controllers: [
    AppController,
    ProductsController,
    ProductTypesController,
    OrdersController,
  ],
  providers: [AppService, ProductsService, ProductTypesService, OrdersService],
})
export class AppModule {}
