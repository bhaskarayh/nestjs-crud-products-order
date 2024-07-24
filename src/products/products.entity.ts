import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ProductTypesEntity } from '../product-types/product-types.entity';

@Entity('products') // Corrected entity name
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;

  @Column()
  stock: number;

  @ManyToOne(
    () => ProductTypesEntity,
    (productTypesEntity) => productTypesEntity.product_type_id,
  )
  @JoinColumn()
  productType: ProductTypesEntity;
}
