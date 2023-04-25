import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddLoanPlan } from '../add-loan-plan';
import { LoanPlansService } from '../service/loan-plans.service';

@Component({
  selector: 'app-loan-plans',
  templateUrl: './loan-plans.component.html',
  styleUrls: ['./loan-plans.component.css']
})
export class LoanPlansComponent implements OnInit {

  customerView: boolean = true;
  bankManagerView: boolean = false;

  addLoanPlan: AddLoanPlan[];

  constructor(private loanPlansService: LoanPlansService
    ,private router: Router) { }

  ngOnInit() {
    this.getLoanPlan();
  }

  private getLoanPlan() {
    this.loanPlansService.getAllLoanPlans().subscribe(data => {
      this.addLoanPlan = data;
    })
  }

  toggleView(): void {
    this.customerView = !this.customerView;
    this.bankManagerView = !this.bankManagerView;
  }

  editLoanPlan(planId: number) {
    this.router.navigate(['editloanplan', planId]);
  }

}

