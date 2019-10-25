import { Component, OnInit } from '@angular/core';
import { Tontine } from '../../../core/models/tontine';
import { TotineService } from '../../../core/services/totine.service';

@Component({
  selector: 'app-tontine-list',
  templateUrl: './tontine-list.component.html',
  styleUrls: ['./tontine-list.component.css']
})
export class TontineListComponent implements OnInit {
  tontines: Tontine[];

  constructor(private totineService: TotineService) { }

  ngOnInit() {
    this.tontines =[
      {
          "id": 1,
          "name": "Phường tháng 1",
          "createdDate": "10/8/2017",
          "value": 2000000,
          "owner": {
              "id": 1,
              "userName": "phuhv3",
              "fullName": "Hồ Văn Phú"
          }
      },
      {
          "id": 2,
          "name": "Phường tháng 2",
          "createdDate": "13/8/2018",
          "value": 5000000,
          "owner": {
              "id": 1,
              "userName": "phuhv1",
              "fullName": "Hồ Văn Phú"
          }
      }
  ]
  }

}
