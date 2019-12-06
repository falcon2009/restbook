import { UserType } from '../enum/user.type';

export class User {
    id: string;
    roleList: string[] = [];
    type: UserType;
}