import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';
export declare class Review {
    id: number;
    rating: number;
    comment: string;
    createdAt: Date;
    user: User;
    userId: number;
    product: Product;
    productId: number;
}
