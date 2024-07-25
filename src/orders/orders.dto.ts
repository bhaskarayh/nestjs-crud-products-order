import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateProductsDto } from 'src/products/products.dto';

export class CreateOrdersDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  sold: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  product_id: number;

  // @ApiProperty()
  // @Type(() => CreateProductsDto)
  // @Expose()
  // product: CreateProductsDto;
}
