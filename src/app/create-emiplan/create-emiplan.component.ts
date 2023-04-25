import { Component,OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-emiplan',
  templateUrl: './create-emiplan.component.html',
  styleUrls: ['./create-emiplan.component.css']
})
export class CreateEmiplanComponent implements OnInit{
  customer: Customer = new Customer();
  constructor( private router:Router){ }
  ngOnInit(): void {
      
  }

  viewCustomer( lpid:number){
   
    this.router.navigate(['create-customer',lpid]);

  }

  onSubmit() {
    
    this.viewCustomer(this.customer.loanplanid);
  }


}
