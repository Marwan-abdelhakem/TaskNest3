import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsService {
    private reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    create(createReviewDto: CreateReviewDto, userId: number): Promise<Review>;
    findByProduct(productId: number): Promise<Review[]>;
    remove(id: number, userId: number, userRole: string): Promise<Review>;
}
