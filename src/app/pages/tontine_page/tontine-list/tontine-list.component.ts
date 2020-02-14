import {Component, OnInit} from '@angular/core';
import {Tontine} from '../../../core/models/tontine';
import {TotineService} from '../../../core/services/totine.service';

@Component({
  selector: 'app-tontine-list',
  templateUrl: './tontine-list.component.html',
  styleUrls: ['./tontine-list.component.css']
})
export class TontineListComponent implements OnInit {
  tontines: Tontine[];

  constructor(private tontineService: TotineService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tontineService.getAllTontines().subscribe((tontines) => {
      this.tontines = tontines;
    });
  }

  edit(tontine) {
    console.log('edit ' + tontine);
  }

  delete(tontine) {
    console.log('delete ' + tontine);
  }
}
