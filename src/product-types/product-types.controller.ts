import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductTypesService } from './product_types.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductTypesDto } from './product-types.dto';

@Controller('product-types')
@ApiTags('product-types')
export class ProductTypesController {
  constructor(public productsTypesService: ProductTypesService) {}

  @Get()
  findAll() {
    return this.productsTypesService.findAllProductTypes();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsTypesService.findProductType(+id);
  }

  @Post()
  create(@Body() createProductTypesDto: CreateProductTypesDto) {
    return this.productsTypesService.createProductType(createProductTypesDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() createProductTypesDto: CreateProductTypesDto,
  ) {
    return this.productsTypesService.updateProductType(
      +id,
      createProductTypesDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsTypesService.removeProductType(+id);
  }
}
