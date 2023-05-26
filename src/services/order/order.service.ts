import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Order, orderDocument} from "../../shemas/order";
import {Model} from "mongoose";
import {OrderDto} from "../../dto/order-dto";

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<orderDocument>) {}

    async sendOrder(data: OrderDto): Promise<Order> {
        const orderData = new this.orderModel(data);
        return orderData.save();
    }

    async getAllOrders(): Promise<Order[]> {
        return this.orderModel.find().exec();
    }
}
