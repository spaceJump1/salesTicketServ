import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {IOrder} from "../interfaces/order/order.interface";

export type orderDocument = HydratedDocument<IOrder>;

@Schema()
export class Order implements IOrder {
    @Prop() age: string;

    @Prop() birthDay: string;

    @Prop() cardNumber: string

    @Prop() tourId: string

    @Prop() userId: string;

}

export const orderSchema = SchemaFactory.createForClass(Order);