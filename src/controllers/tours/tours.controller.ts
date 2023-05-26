import {Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ToursService} from "../../services/tours/tours.service";
import {Tour} from "../../shemas/tour";
import {JwtAuthGuard} from "../../services/Authentication/jwt-auth.guard/jwt-auth.guard.service";
import {ITour} from "../../interfaces/tours/tours.interface";

@Controller('tours')
export class ToursController {
    constructor(private toursService: ToursService) {
    }

    // @Get()
    // getAllTours(): void {
    //     this.toursService.generateTours();
    // }
    // @Get(':remove')
    // removeAllTours(@Param('remove') remove): void {
    //     this.toursService.deleteTours();
    // }

    @Get(':id')
    async getTourById(@Param('id') id): Promise<Tour> {
        return await this.toursService.getTourById(id);
    }

    @Post()
    initTours(): Promise<ITour[]> {
        return this.toursService.generateTours().then(() => {
            return this.toursService.getAllTours();
        });

        // this.toursService.generateTours();
        // return this.toursService.getAllTours();
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllTours(): Promise<ITour[]> {
        return this.toursService.getAllTours();
    }

    @Delete(':remove')
    removeAllTours(@Param('remove') remove): void {
        this.toursService.deleteTours();
    }

    // @Delete()
    // removeAllTours(): void {
    //     this.toursService.deleteTours();
    // }
}
