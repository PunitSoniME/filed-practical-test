import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { CreditCard } from './models/credit-card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toastConfig: { type: string, message: string } = null;
  creditCard: Observable<CreditCard>;

  constructor(
    private store: Store<AppState>
  ) {

    this.creditCard = store.select("creditCard");

    this.creditCard.subscribe((res) => {

      if (res) {
        this.toastConfig = { type: "success", message: "Payment added successfully" }
        setTimeout(() => {
          this.toastConfig = null;
        }, 3000);
      }
    });
  }

}
