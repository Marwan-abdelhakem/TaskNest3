import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private reviewRepository: Repository<Review>,
    ) { }

    async create(createReviewDto: CreateReviewDto, userId: number) {
        const review = this.reviewRepository.create({
            ...createReviewDto,
            userId,
        });
        return await this.reviewRepository.save(review);
    }

    async findByProduct(productId: number) {
        return await this.reviewRepository.find({
            where: { productId },
            relations: ['user'],
        });
    }

    async remove(id: number, userId: number, userRole: string) {
        const review = await this.reviewRepository.findOne({ where: { id } });
        if (!review) throw new NotFoundException(' not founded ');

        if (review.userId !== userId && userRole !== 'admin') {
            throw new Error('Un role');
        }

        return await this.reviewRepository.remove(review);
    }
}