import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateProductTypesDto } from 'src/product-types/product-types.dto';

export class CreateProductsDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  product_id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  product_name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  stock: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  product_type_id: number;

  // @ApiProperty()
  // @Type(() => CreateProductTypesDto)
  // @Expose()
  // productType: CreateProductTypesDto;
}

export class UpdateProductsDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  product_id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  product_name: string;

  @IsNumber()
  @ApiProperty()
  stock: number;

  @ApiProperty()
  @Type(() => CreateProductTypesDto)
  @Expose()
  productType: CreateProductTypesDto;
}
