import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { CreateOrdersDto } from './orders.dto';
import { ProductsService } from 'src/products/products.service';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Logger } from '@nestjs/common';

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

  createOrder(createOrdersDto: CreateOrdersDto): Promise<OrdersEntity> {
    const order: OrdersEntity = new OrdersEntity();

    // console.log(this.productService.findAllProducts());

    // Logger.error('something went wrong! ', error);

    async () => {
      Logger.log(await this.productService.findAllProducts());
    };
    // Logger.warn('warning');

    order.sold = createOrdersDto.sold;
    order.product = createOrdersDto.product;
    order.stock = 0;

    return this.ordersRepository.save(order);
  }
}
