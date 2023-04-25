import { Component,OnInit} from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { Fetchvalues } from '../fetchvalues';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer : Customer = new Customer();
  lpid:number;
  fetchcustomer : Fetchvalues = new Fetchvalues();

  constructor(private customerService: CustomerService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.lpid= this.route.snapshot.params['lpid'];
    //this.pid=12;
    console.log(this.lpid);
    this.customerService.getCustomerValues(this.lpid).subscribe(data => {
      console.log(data);
      this.customer = data;
    });
    
  }
    saveCustomer(){
      this.customerService.createCustomer(this.customer).subscribe( data =>{
        console.log("check");
        console.log(data);
      });
      this.goToCustomerList();
    }

      goToCustomerList(){
        this.router.navigate(['/customers']);

      }
      
      
    
    onSubmit() {
      console.log(this.customer);
      this.saveCustomer();
      
    }
      
  

}
