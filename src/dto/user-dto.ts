import {IUser} from "../interfaces/users/users.interface";

export class UserDto implements IUser {
    psw: string;
    cardNumber: string;
    login: string;
    email: string;
    id: string;
}