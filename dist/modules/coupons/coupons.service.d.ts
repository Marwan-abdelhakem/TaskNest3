import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity';
import { CreateCouponDto } from './dto/create-coupon.dto';
export declare class CouponsService {
    private couponRepository;
    constructor(couponRepository: Repository<Coupon>);
    create(createCouponDto: CreateCouponDto): Promise<Coupon>;
    findAll(): Promise<Coupon[]>;
    remove(id: number): Promise<Coupon>;
}
