import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tontine-detail',
  templateUrl: './tontine-detail.component.html',
  styleUrls: ['./tontine-detail.component.css']
})
export class TontineDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id );
    });
  }

}
