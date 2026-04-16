import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    rating: number;

    @Column({ type: 'text' })
    comment: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
    user: User;

    @Column()
    userId: number;

    @ManyToOne(() => Product, (product) => product.id, { onDelete: 'CASCADE' })
    product: Product;

    @Column()
    productId: number;
}