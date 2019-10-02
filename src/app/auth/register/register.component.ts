import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registration } from 'src/app/models/registration';
import { REGISTRATION } from 'src/app/mock-data/mock-data';
import { AuthModule } from '../auth.module';
import { Alert, WebElement } from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  item: registration;
  alert:Alert;
  constructor(private router: Router) { }

  ngOnInit() {
    this.item = new registration;
  }
  RegisterClick() {
    var cheakbox=document.getElementById("cheak");
    if (this.item.password == this.item.passwordconfirm) {
      
      REGISTRATION.push(this.item);
      console.log(this.item);
      this.router.navigate(['']);
    }
    else{
     alert("Field password and confirm pasword different");
    }
  }
}
