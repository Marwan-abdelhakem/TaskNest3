import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity';
import { CreateCouponDto } from './dto/create-coupon.dto';

@Injectable()
export class CouponsService {
    constructor(
        @InjectRepository(Coupon)
        private couponRepository: Repository<Coupon>,
    ) { }

    async create(createCouponDto: CreateCouponDto) {
        const existing = await this.couponRepository.findOne({ where: { code: createCouponDto.code } });
        if (existing) throw new ConflictException('Coupon code already exists');

        const coupon = this.couponRepository.create(createCouponDto);
        return await this.couponRepository.save(coupon);
    }

    async findAll() {
        return await this.couponRepository.find();
    }

    async remove(id: number) {
        const coupon = await this.couponRepository.findOne({ where: { id } });
        if (!coupon) throw new NotFoundException('Coupon not found');
        return await this.couponRepository.remove(coupon);
    }
}