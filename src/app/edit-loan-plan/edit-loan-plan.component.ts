import { Component, OnInit } from '@angular/core';
import { LoanPlansService } from '../service/loan-plans.service';
import { AddLoanPlan } from '../add-loan-plan';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-loan-plan',
  templateUrl: './edit-loan-plan.component.html',
  styleUrls: ['./edit-loan-plan.component.css']
})
export class EditLoanPlanComponent implements OnInit {

  planId: number;
  loanPlan: AddLoanPlan = new AddLoanPlan();

  constructor(private loanPlansService: LoanPlansService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.planId = this.route.snapshot.params['planId'];
    this.loanPlansService.getLoanPlanById(this.planId).subscribe(data=>{
      this.loanPlan = data;
    },
    error => console.log(error));
  }

  onSubmit() {
    this.loanPlansService.updateLoanPlan(this.planId, this.loanPlan).subscribe(data =>{
      this.goToLoanPlans();
    },
    error => console.log(error));
  }

  goToLoanPlans() {
    this.router.navigate(['showacknowledgement']);
  }
}
