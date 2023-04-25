import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fetchvalues } from '../fetchvalues';
import { Customer } from '../customer';
import { Emipayments } from '../emipayments';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = "http://localhost:8083/api/v1/view";

  constructor(private httpClient: HttpClient) { }
  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,customer);
  }

  createPayment(cpayment: Emipayments ) :Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/pay`,cpayment);
  }

  getCustomerById(id: number, loanplanid:number ): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}/${loanplanid}`);
  }

  getCustomerDetailById(id: number,loanplanid :number ): Observable<Emipayments>{
    return this.httpClient.get<Emipayments>(`${this.baseURL}/pay/${id}/${loanplanid}`);
  }

  getPaymentHistory(loanplanid :number ): Observable<Emipayments[]>{
    return this.httpClient.get<Emipayments[]>(`${this.baseURL}/paymenthistory/${loanplanid}`);
  }

  getCustomerValues(loanplanid :number ): Observable<Fetchvalues>{
    return this.httpClient.get<Fetchvalues>(`${this.baseURL}/fetchdata/${loanplanid}`);
  }

  
}
