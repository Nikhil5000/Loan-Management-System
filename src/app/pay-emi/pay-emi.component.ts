import { Component, OnInit } from '@angular/core';
import { Emipayments } from '../emipayments';
import { Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';


@Component({
  selector: 'app-pay-emi',
  templateUrl: './pay-emi.component.html',
  styleUrls: ['./pay-emi.component.css']
})
export class PayEmiComponent implements OnInit{


  

  emipayments : Emipayments = new Emipayments();

  constructor(private customerService: CustomerService,
    private router:Router
    ) { }
  ngOnInit(): void {

   
      
  }

  viewCustomer(id:number, pid:number){
   
    this.router.navigate(['fetch-pay-emi',id,pid]);

  }

  onSubmit() {
    
    
    
    this.viewCustomer(this.emipayments.customerid,this.emipayments.loanplanid);
  }

}
