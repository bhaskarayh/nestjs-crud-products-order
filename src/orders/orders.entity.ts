import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductTypesEntity } from '../product-types/product-types.entity';
import { ProductsEntity } from 'src/products/products.entity';

@Entity('orders') // Corrected entity name
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(
    () => ProductsEntity,
    (productsEntity) => productsEntity.product_id,
  )
  @JoinColumn()
  product: ProductsEntity;

  @Column()
  stock: number;

  @Column()
  sold: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
