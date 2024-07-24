import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('product_types') // Corrected entity name
export class ProductTypesEntity {
  @PrimaryGeneratedColumn()
  product_type_id: number;

  @Column()
  product_type_name: string;
}
