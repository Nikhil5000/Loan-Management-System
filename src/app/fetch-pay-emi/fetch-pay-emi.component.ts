import { Component, OnInit } from '@angular/core';
import { Emipayments } from '../emipayments';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-fetch-pay-emi',
  templateUrl: './fetch-pay-emi.component.html',
  styleUrls: ['./fetch-pay-emi.component.css']
})
export class FetchPayEmiComponent implements OnInit{
  id:number;
  pid:number;
  loanplanid:number;

  emipay: Emipayments= new Emipayments();

  

  constructor(private customerService: CustomerService,
    private route: ActivatedRoute) { }
    
  ngOnInit(): void {


    this.id = this.route.snapshot.params['id'];
    this.pid= this.route.snapshot.params['pid'];
    console.log(this.id);
    this.customerService.getCustomerDetailById(this.id,this.pid).subscribe(data => {
      console.log(data);
      this.emipay = data;
    });
    
     
    
      
  }


  onSubmit() {
    this.emipay.id=0;
    console.log("save payment");
    this.customerService.createPayment(this.emipay).subscribe( data =>{
      console.log(data);
    });
    
  }

}
