import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "../../services/users/users.service";
import { MongooseModule } from '@nestjs/mongoose';
import {User, UserSchema} from "../../shemas/user";
import {AuthService} from "../../services/Authentication/auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import {JwtStrategyService} from "../../services/Authentication/jwt.strategy/jwt.strategy.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]), PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '60s'}
    })],
    controllers: [UsersController],
    providers: [UsersService, AuthService, JwtStrategyService],
})

export class UsersModule {}
