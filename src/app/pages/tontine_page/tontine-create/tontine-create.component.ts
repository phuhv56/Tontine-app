import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';

@Component({
  selector: 'app-tontine-create',
  templateUrl: './tontine-create.component.html',
  styleUrls: ['./tontine-create.component.css']
})
export class TontineCreateComponent implements OnInit {
  display = false;
  users: User[];

  constructor() {
  }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }
}
