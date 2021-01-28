import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'credit-card-payment',
    loadChildren: () => import('./credit-card-payment/credit-card-payment.module').then(m => m.CreditCardPaymentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
