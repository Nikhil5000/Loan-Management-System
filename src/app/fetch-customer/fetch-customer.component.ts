import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-fetch-customer',
  templateUrl: './fetch-customer.component.html',
  styleUrls: ['./fetch-customer.component.css']
})
export class FetchCustomerComponent implements OnInit {

  id:number;
  loanid:number;

  customer: Customer= new Customer() ;

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loanid=this.route.snapshot.params['loanid'];
    console.log(this.id);
    this.customerService.getCustomerById(this.id,this.loanid).subscribe(data => {
      console.log(data);
      this.customer = data;
      
    

    });
  }
  getPaymentHistory( loanpid:number){
    this.router.navigate(['payment-history',loanpid]);

  }
  
  

}
