import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Tontine} from '../models/tontine';

@Injectable({
  providedIn: 'root'
})
export class TotineService {

  constructor() {
  }

  getAllTontines(): Observable<Tontine[]> {
    const tontines: Tontine[] = [
      {
        id: 1,
        name: 'Phường tháng 1',
        createdDate: '10/8/2017',
        value: 2000000,
        owner: {
          id: 1,
          userName: 'phuhv3',
          fullName: 'Hồ Văn Phú',
          phone: '0386714792'
        }
      },
      {
        id: 2,
        name: 'Phường tháng 2',
        createdDate: '13/8/2018',
        value: 5000000,
        owner: {
          id: 1,
          userName: 'phuhv1',
          fullName: 'Hồ Văn Phú',
          phone: '0386714792'
        }
      }
    ];
    return of(tontines);
  }
}
