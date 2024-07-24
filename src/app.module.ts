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

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    TypeOrmModule.forFeature([ProductsEntity, ProductTypesEntity]),
  ],
  controllers: [AppController, ProductsController, ProductTypesController],
  providers: [AppService, ProductsService, ProductTypesService],
})
export class AppModule {}
