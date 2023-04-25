import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanPlansService } from '../service/loan-plans.service';
import { AddLoanPlan } from '../add-loan-plan';

@Component({
  selector: 'app-add-loan-plan',
  templateUrl: './add-loan-plan.component.html',
  styleUrls: ['./add-loan-plan.component.css']
})
export class AddLoanPlanComponent implements OnInit{

  addLoanPlan: AddLoanPlan = new AddLoanPlan();

  constructor(private loanPlansService: LoanPlansService,
    private router: Router){}

  ngOnInit(): void {
  }

  saveLoanPlan(){
    this.loanPlansService.createLoanPlan(this.addLoanPlan).subscribe(data=>{
      console.log(data);
      this.goToLoanPlans();
    },
    error => console.log(error));
  }

  goToLoanPlans() {
    this.router.navigate(['showacknowledgement']);
  }

  onSubmit() {
    console.log(this.addLoanPlan);
    this.saveLoanPlan();
  }

  // loanType: string = 'Home';
  // tenure: number = 1;
  // interestRate: number = 1;
  // showAcknowledgement: boolean = false;

  // submitForm() {
  //   this.showAcknowledgement = true;
  // }

  // calculateInterestAmount(): number {
  //   // Calculate interest amount based on loan type, tenure, and interest rate
  //   // and return the calculated value
  //   return 0;
  // }

  // calculateTotalPayable(): number {
  //   // Calculate total payable amount based on loan type, tenure, and interest rate
  //   // and return the calculated value
  //   return 0;
  // }

  // calculateEMIAmount(): number {
  //   // Calculate EMI amount based on loan type, tenure, and interest rate
  //   // and return the calculated value
  //   return 0;
  // }
}







