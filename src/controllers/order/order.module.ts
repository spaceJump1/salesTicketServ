import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Order, orderSchema} from "../../shemas/order";
import {OrderService} from "../../services/order/order.service";

@Module({
  imports: [MongooseModule.forFeature([{name: Order.name, schema: orderSchema}])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
