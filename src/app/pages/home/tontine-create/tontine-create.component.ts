import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tontine-create',
  templateUrl: './tontine-create.component.html',
  styleUrls: ['./tontine-create.component.css']
})
export class TontineCreateComponent implements OnInit {
  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  showDialog() {
    this.display = true;
  }
}
