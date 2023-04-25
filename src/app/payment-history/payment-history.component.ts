import { Component, OnInit } from '@angular/core';
import { Emipayments } from '../emipayments';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  id:number;
  loanpid:number;
  payments:Emipayments[]; 
  constructor(private customerService: CustomerService,
    private route:ActivatedRoute) { }
  ngOnInit(): void {
    
    this.loanpid= this.route.snapshot.params['loanpid'];
    console.log(this.loanpid);
    
    this.customerService.getPaymentHistory(this.loanpid).subscribe(data => {
      console.log(data);
      this.payments = data;
    });
      
  }

}
