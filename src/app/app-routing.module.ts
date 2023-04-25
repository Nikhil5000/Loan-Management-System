import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanPlanComponent } from './add-loan-plan/add-loan-plan.component';
//import { LoginComponent, UserLoginComponent } from './user-login/user-login.component';
import { LoanPlansComponent } from './loan-plans/loan-plans.component';
import { EditLoanPlanComponent } from './edit-loan-plan/edit-loan-plan.component';
import { ShowacknowledgementComponent } from './showacknowledgement/showacknowledgement.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { FetchCustomerComponent } from './fetch-customer/fetch-customer.component';
import { PayEmiComponent } from './pay-emi/pay-emi.component';
import { FetchPayEmiComponent } from './fetch-pay-emi/fetch-pay-emi.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ExtensionRequestListComponent } from './extension-request-list/extension-request-list.component';
import { NewExtensionRequestFormComponent } from './new-extension-request-form/new-extension-request-form.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RespondExtensionComponent } from './respond-extension/respond-extension.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CreateEmiplanComponent } from './create-emiplan/create-emiplan.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  //{ path: '', component: LoginComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'addloanplan', component: AddLoanPlanComponent },
  { path: 'loanplans', component: LoanPlansComponent },
  { path: 'editloanplan/:planId', component: EditLoanPlanComponent },
  { path: 'showacknowledgement', component: ShowacknowledgementComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'create-customer/:lpid', component: CreateCustomerComponent },
  { path: '', redirectTo: 'userlogin', pathMatch: 'full' },
  { path: 'view-customer', component: ViewCustomerComponent },
  { path: 'fetch-customer/:id/:loanid', component: FetchCustomerComponent },
  { path: 'pay-emi', component: PayEmiComponent },
  { path: 'fetch-pay-emi/:id/:pid', component: FetchPayEmiComponent },
  { path: 'payment-history/:loanpid', component: PaymentHistoryComponent },
  { path: 'create-emiplan', component: CreateEmiplanComponent },
  { path: 'requests', component: ExtensionRequestListComponent },
  { path: 'newrequest', component: NewExtensionRequestFormComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'respondextension/:requestId', component: RespondExtensionComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
