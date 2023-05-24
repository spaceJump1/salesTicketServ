import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import { Strategy } from "passport-local";
import {UsersService} from "../../users/users.service";
import {PassportStrategy} from "@nestjs/passport";


@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService) {
        super({usernameField: 'login', passwordField: 'psw'});
    }

    async validate(login: string, password: string): Promise<any> {
        const user = await this.userService.checkAuthUser(login, password);
        console.log('user', user)
        if (!user) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                errorText: 'Пользователь не найден в базе',
            }, HttpStatus.CONFLICT);
        }
        return true;
    }
}
