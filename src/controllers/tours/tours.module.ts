import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Tour, TourSchema} from "../../shemas/tour";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import {JwtStrategyService} from "../../services/Authentication/jwt.strategy/jwt.strategy.service";
import {ToursService} from "../../services/tours/tours.service";

@Module({
  controllers: [ToursController],
  imports: [MongooseModule.forFeature([{name: Tour.name, schema: TourSchema}]),
  PassportModule,
  JwtModule.register({
    secret: jwtConstants.secret
  })],
  providers: [ToursService, JwtStrategyService]
})
export class ToursModule {}
