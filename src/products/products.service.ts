import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';
import { Repository } from 'typeorm';
import { CreateProductsDto, UpdateProductsDto } from './products.dto';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
  ) {}

  findAllProducts(): Promise<ProductsEntity[]> {
    return this.productsRepository.find({ relations: { productType: true } });
  }

  findProduct(id: number): Promise<ProductsEntity> {
    return this.productsRepository.findOne({
      where: { product_id: id },
      relations: ['productType'],
    });
  }

  createProduct(createProductDto: CreateProductsDto): Promise<ProductsEntity> {
    const product: ProductsEntity = new ProductsEntity();
    product.product_name = createProductDto.product_name;
    product.productType = createProductDto.productType;
    product.stock = createProductDto.stock;

    return this.productsRepository.save(product);
  }

  updateProduct(
    id: number,
    updateProductDto: UpdateProductsDto,
  ): Promise<ProductsEntity> {
    const product: ProductsEntity = new ProductsEntity();
    product.product_name = updateProductDto.product_name;
    product.stock = updateProductDto.stock;
    product.productType = updateProductDto.productType;
    product.product_id = id;

    return this.productsRepository.save(product);
  }

  removeProduct(id: number): Promise<{ affected?: number }> {
    return this.productsRepository.delete(id);
  }
}
