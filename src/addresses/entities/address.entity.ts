import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  addressId: string;

  @Column({ nullable: false })
  line1: string;

  @Column({ nullable: false })
  line2: string;

  @Column({ nullable: false })
  suburb: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  province: string;

  @Column({ nullable: false })
  postalCode: string;

  @Column({ nullable: false })
  country: string;
}
