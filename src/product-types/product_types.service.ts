import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductTypesEntity } from './product-types.entity';
import { Repository } from 'typeorm';
import { CreateProductTypesDto } from './product-types.dto';

@Injectable()
export class ProductTypesService {
  constructor(
    @InjectRepository(ProductTypesEntity)
    private readonly productTypesRepository: Repository<ProductTypesEntity>,
  ) {}

  findAllProductTypes(): Promise<ProductTypesEntity[]> {
    return this.productTypesRepository.find();
  }

  findProductType(id: number): Promise<ProductTypesEntity> {
    return this.productTypesRepository.findOne({
      where: { product_type_id: id },
    });
  }

  createProductType(
    createProductTypesDto: CreateProductTypesDto,
  ): Promise<ProductTypesEntity> {
    const productTypes: ProductTypesEntity = new ProductTypesEntity();
    productTypes.product_type_name = createProductTypesDto.product_type_name;

    return this.productTypesRepository.save(productTypes);
  }

  updateProductType(
    id: number,
    createProductTypesDto: CreateProductTypesDto,
  ): Promise<ProductTypesEntity> {
    const productType: ProductTypesEntity = new ProductTypesEntity();
    productType.product_type_name = createProductTypesDto.product_type_name;
    productType.product_type_id = id;

    return this.productTypesRepository.save(productType);
  }

  removeProductType(id: number): Promise<{ affected?: number }> {
    return this.productTypesRepository.delete(id);
  }
}
