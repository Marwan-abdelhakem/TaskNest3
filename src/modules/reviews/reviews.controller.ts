import { Controller, Post, Body, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '../../common/enums/user-role.enum';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) { }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.CUSTOMER)
    create(@Body() createReviewDto: CreateReviewDto, @CurrentUser() user: any) {
        return this.reviewsService.create(createReviewDto, user.id);
    }

    @Get('product/:productId')
    findByProduct(@Param('productId') productId: string) {
        return this.reviewsService.findByProduct(+productId);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    remove(@Param('id') id: string, @CurrentUser() user: any) {
        return this.reviewsService.remove(+id, user.id, user.role);
    }
}