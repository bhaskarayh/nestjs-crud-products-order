import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { OrdersEntity } from './orders.entity';
import { CreateOrdersDto } from './orders.dto';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(public orderService: OrdersService) {}

  @Get()
  findAll() {
    return this.orderService.findAllOrders();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOrder(+id);
  }

  @Post()
  create(@Body() CreateOrdersDto: CreateOrdersDto) {
    return this.orderService.createOrder(CreateOrdersDto);
  }
}
