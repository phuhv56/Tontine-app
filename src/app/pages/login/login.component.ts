import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loginData = new FormGroup({
      username: new FormControl(),
      pwd: new FormControl()
    });
  }

  onLogin(data) {
    this.router.navigate(['/tontines']);
    localStorage.setItem("currentUser", data.username);
  }
}
