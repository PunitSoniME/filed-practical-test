import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { PaymentService } from '../services/payment/payment.service';

import * as CreditCardActions from './../actions/credit-card.actions';

@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.scss']
})
export class CreditCardPaymentComponent implements OnInit {

  payButtonText: string = "Pay";

  date = new Date();
  dateOfToday = null;

  creditCardForm: FormGroup = new FormGroup({
    creditCardNumber: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    cardHolder: new FormControl(null, [Validators.required]),
    expirationDate: new FormControl(null, [Validators.required]),
    securityCode: new FormControl(null, [Validators.maxLength(3), Validators.pattern(/^[0-9]{3}$/)]),
    amount: new FormControl(null, [Validators.required, Validators.min(1), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
  });;

  constructor(
    private store: Store<AppState>,
    private paymentService: PaymentService
  ) {

  }

  ngOnInit(): void {
    this.date.setDate(this.date.getDate() + 1)

    const month = this.date.getMonth() < 10 ? ("0" + (this.date.getMonth() + 1)) : (this.date.getMonth() + 1);
    this.dateOfToday = `${this.date.getFullYear()}-${month}-${this.date.getDate()}`
  }

  addCreditCard() {
    if (this.creditCardForm.valid) {
      const formValues = this.creditCardForm.value;
      this.payButtonText = "Processing...";

      this.paymentService.payAmount(formValues).subscribe((response) => {
        this.store.dispatch(new CreditCardActions.AddCreditCard(formValues));
        this.payButtonText = "Pay";

        // Comment below line if you want to keep entered credit card details
        this.creditCardForm.reset();
      }, error => {
        this.payButtonText = "Pay";
      })
    }
  }

}
