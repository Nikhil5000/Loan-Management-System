export class AddLoanPlan {
    planId: number;
    planName: string;
    loanTypeId: number;
    principalAmount: number;
    tenure: number;
    interestRate: number;
    interestAmount: number;
    totalPayable: number;
    emi: number;
    planValidity: Date;
    planAddedOn: Date;
}
