import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto, user: any): Promise<import("./entities/review.entity").Review>;
    findByProduct(productId: string): Promise<import("./entities/review.entity").Review[]>;
    remove(id: string, user: any): Promise<import("./entities/review.entity").Review>;
}
