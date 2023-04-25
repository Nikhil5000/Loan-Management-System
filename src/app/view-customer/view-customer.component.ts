import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  
  customer : Customer = new Customer();


  constructor(private customerService: CustomerService,
    private router:Router) { }
  ngOnInit(): void {
      
  }

  viewCustomer(id:number,loanid:number){
   
    this.router.navigate(['fetch-customer',id,loanid]);

  }

  onSubmit() {
    
    this.viewCustomer(this.customer.customerid,this.customer.loanplanid);
  }

}
