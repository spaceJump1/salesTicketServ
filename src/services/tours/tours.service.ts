import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Tour, TourDocument} from "../../shemas/tour";
import {Model} from "mongoose";
import {TourDto} from "../../dto/tour-dto";
import {ITour, ITourClient} from "../../interfaces/tours/tours.interface";

@Injectable()
export class ToursService {
    private toursCount = 10;

    constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}

    async generateTours(): Promise<any> {
        for (let i = 0; i <= this.toursCount; i++) {
            // const tour = new TourDto('test' + i, 'test desc', 'test operator', '300' + i, '');
            // const tourData = new this.tourModel(tour);
            // await tourData.save();
        }
    }

    async getTourById(id: string): Promise<Tour> {
        return await this.tourModel.findById(id).exec();
    }

    async getAllTours(): Promise<ITour[]> {
        return this.tourModel.find();
    }

    async deleteTours(): Promise<any> {
        return this.tourModel.deleteMany({})
    }

    async uploadTour(body: ITourClient) {
        const tour = new TourDto(body.name, body.description, body.tourOperator, body.price, body.img);
        const tourData = new this.tourModel(tour);
        await tourData.save();
    }

    async getTours() {
        return this.tourModel.find().exec();
    }

    async getToursByName(name: string): Promise<ITour[]> {
        return this.tourModel.find({ name: { $regex: name, $options: 'i' } });
    }
}
