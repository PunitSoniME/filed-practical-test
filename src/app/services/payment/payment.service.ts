import { Injectable } from '@angular/core';
import { CreditCard } from './../../models/credit-card.model';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  api: string = environment.api;

  constructor(
    private httpService: HttpService
  ) { }

  payAmount(payload: CreditCard) {
    return this.httpService.postRequestWithFakeSuccessResponse(`${this.api}/pay-amount`, payload);
  }
}
