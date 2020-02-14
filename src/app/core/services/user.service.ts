import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getAllUsers(): Observable<User[]> {
    const users: User[] = [
      {
        id: 1,
        fullName: 'Hồ Văn Phú',
        userName: 'phuhv',
        phone: '0386714792'
      },
      {
        id: 2,
        fullName: 'Hoàng Thị Thúy Hằng',
        userName: 'hanghtt',
        phone: '0963566027'
      }
    ];
    return of(users);
  }
}
