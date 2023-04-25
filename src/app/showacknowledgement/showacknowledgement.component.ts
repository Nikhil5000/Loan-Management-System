import { Component, OnInit } from '@angular/core';

import { LoanPlansService } from '../service/loan-plans.service';
import { AddLoanPlan } from '../add-loan-plan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showacknowledgement',
  templateUrl: './showacknowledgement.component.html',
  styleUrls: ['./showacknowledgement.component.css']
})
export class ShowacknowledgementComponent implements OnInit {

  loanPlans: AddLoanPlan[];

  constructor(private loanPlansService: LoanPlansService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllLoanPlans();
  }

  private getAllLoanPlans() {
    this.loanPlansService.getAllLoanPlans().subscribe(data => {
      this.loanPlans = data;
    })
  }

  editLoanPlan(planId: number) {
    this.router.navigate(['editloanplan', planId]);
  }
}
