import { Controller, Post, Get, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRole } from '../../common/enums/user-role.enum';

@Controller('coupons')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CouponsController {
    constructor(private readonly couponsService: CouponsService) { }

    @Post()
    @Roles(UserRole.ADMIN)
    create(@Body() createCouponDto: CreateCouponDto) {
        return this.couponsService.create(createCouponDto);
    }

    @Get()
    @Roles(UserRole.ADMIN)
    findAll() {
        return this.couponsService.findAll();
    }

    @Delete(':id')
    @Roles(UserRole.ADMIN)
    remove(@Param('id') id: string) {
        return this.couponsService.remove(+id);
    }
}