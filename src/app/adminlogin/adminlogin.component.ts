import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username = 'salonikr'
  password = '54321'
  invalidLogin = false
  errorMessage = 'Invalid Credentials'

  constructor(private router: Router) {}

  handleLogin() {
    if(this.username==="salonikr" && this.password==="54321") {
      //redirect to loan-plans page
      this.router.navigate(['/addloanplan'])
      this.invalidLogin=false;
    }
    else {
      this.invalidLogin=true;
    }
  }
}
