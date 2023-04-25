import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddLoanPlanComponent } from './add-loan-plan/add-loan-plan.component';
import { LoanPlansComponent } from './loan-plans/loan-plans.component';
import { EditLoanPlanComponent } from './edit-loan-plan/edit-loan-plan.component';
//import { LoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowacknowledgementComponent } from './showacknowledgement/showacknowledgement.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { FetchCustomerComponent } from './fetch-customer/fetch-customer.component';
import { PayEmiComponent } from './pay-emi/pay-emi.component';
import { FetchPayEmiComponent } from './fetch-pay-emi/fetch-pay-emi.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { CreateEmiplanComponent } from './create-emiplan/create-emiplan.component';
import { ExtensionRequestListComponent } from './extension-request-list/extension-request-list.component';
import { NewExtensionRequestFormComponent } from './new-extension-request-form/new-extension-request-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RespondExtensionComponent } from './respond-extension/respond-extension.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddLoanPlanComponent,
    LoanPlansComponent,
    EditLoanPlanComponent,
    ShowacknowledgementComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    ViewCustomerComponent,
    FetchCustomerComponent,
    PayEmiComponent,
    FetchPayEmiComponent,
    PaymentHistoryComponent,
    CreateEmiplanComponent,
    ExtensionRequestListComponent,
    NewExtensionRequestFormComponent,
    UserLoginComponent,
    AdminloginComponent,
    RespondExtensionComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
