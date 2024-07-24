import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductTypesDto {
  @ApiProperty()
  @IsNumber()
  product_type_id: number;

  @ApiProperty()
  @IsString()
  product_type_name: string;
}
