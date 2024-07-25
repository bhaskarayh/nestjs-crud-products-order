import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { CreateOrdersDto } from './orders.dto';
import { ProductsService } from 'src/products/products.service';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Logger } from '@nestjs/common';
import {
  CreateProductsDto,
  UpdateProductsDto,
} from 'src/products/products.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly ordersRepository: Repository<OrdersEntity>,
    private readonly productService: ProductsService,
  ) {}

  findAllOrders(): Promise<OrdersEntity[]> {
    return this.ordersRepository.find({ relations: { product: true } });
  }

  findOrder(id: number): Promise<OrdersEntity> {
    return this.ordersRepository.findOne({
      where: { order_id: id },
      relations: ['product'],
    });
  }

  async createOrder(createOrdersDto: CreateOrdersDto): Promise<OrdersEntity> {
    const order: OrdersEntity = new OrdersEntity();
    let updateProductDto: UpdateProductsDto = new UpdateProductsDto();

    const productDetail = await this.productService.findProduct(
      +createOrdersDto.product_id,
    );

    order.sold = createOrdersDto.sold;
    // order.stock = 0;

    order.stock = productDetail.stock - createOrdersDto.sold;
    // Logger.log(JSON.stringify(productDetail));
    // Logger.log(order.toString());

    updateProductDto = productDetail;
    updateProductDto.stock = order.stock;

    const updateProduct = await this.productService.updateProduct(
      +createOrdersDto.product_id,
      updateProductDto,
    );

    order.product = updateProduct;
    const saveOrder = await this.ordersRepository.save(order).catch((error) => {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    });

    return saveOrder;
  }
}
