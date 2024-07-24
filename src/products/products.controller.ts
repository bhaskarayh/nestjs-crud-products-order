import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto, UpdateProductsDto } from './products.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(public productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findProduct(+id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductsDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductsDto: UpdateProductsDto,
  ) {
    return this.productsService.updateProduct(+id, updateProductsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.removeProduct(+id);
  }

  //   @Get(':id')
  //   getProductById(@Param('id') id: number): string {
  //     return `Get ID ${id}`;
  //   }
}
