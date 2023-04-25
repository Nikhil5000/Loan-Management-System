import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username = 'saloni'
  password = '12345'
  invalidLogin = false
  errorMessage = 'Invalid Credentials'

  constructor(private router: Router) {}

  handleLogin() {
    if(this.username==="saloni" && this.password==="12345") {
      //redirect to loan-plans page
      this.router.navigate(['/loanplans'])
      this.invalidLogin=false;
    }
    else {
      this.invalidLogin=true;
    }
  }
}
