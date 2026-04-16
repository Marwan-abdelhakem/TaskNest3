import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('coupons')
export class Coupon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @Column({ type: 'int' })
    discountPercent: number;

    @Column()
    expiresAt: Date;

    @Column({ default: true })
    isActive: boolean;
}