import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardPaymentRoutingModule } from './credit-card-payment-routing.module';
import { CreditCardPaymentComponent } from './credit-card-payment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreditCardPaymentComponent],
  imports: [
    CommonModule,
    CreditCardPaymentRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreditCardPaymentModule { }
