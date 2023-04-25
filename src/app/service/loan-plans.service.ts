import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddLoanPlan } from '../add-loan-plan';

@Injectable({
  providedIn: 'root'
})
export class LoanPlansService {

  constructor(
    private http: HttpClient
  ) { }

  createLoanPlan(addLoanPlan: AddLoanPlan): Observable<Object> {
    return this.http.post(`http://localhost:8081/api/loanplans`, addLoanPlan);
  }

  getAllLoanPlans(): Observable<AddLoanPlan[]> {
    return this.http.get<AddLoanPlan[]>(`http://localhost:8081/api/loanplans`);
  }

  getLoanPlanById(planId: number): Observable<AddLoanPlan> {
    return this.http.get<AddLoanPlan>(`http://localhost:8081/api/loanplans/${planId}`);
  }

  updateLoanPlan(planId: number, addLoanPlan: AddLoanPlan): Observable<Object> {
    return this.http.put(`http://localhost:8081/api/loanplans/${planId}`, addLoanPlan);
  }
}
