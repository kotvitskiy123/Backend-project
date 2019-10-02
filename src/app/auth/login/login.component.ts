import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email: string;
  Password: string;
  item:login;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  LoginClick() {
    this.router.navigate(['']);
  }
}
