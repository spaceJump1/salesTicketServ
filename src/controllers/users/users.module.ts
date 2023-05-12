import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "../../services/users/users.service";
import { MongooseModule } from '@nestjs/mongoose';
import {User, UserSchema} from "../../shemas/user";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule {}
