import { User } from './user';

export class Tontine {
    id: number;
    name: string;
    createdDate: string;
    owner: User;
    value: number;
}
