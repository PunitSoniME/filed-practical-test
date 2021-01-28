import { Injectable } from '@angular/core';
import { CreditCard } from './../../models/credit-card.model';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  api: string = environment.fakeApi;

  constructor(
    private httpService: HttpService
  ) { }

  payAmount(data: CreditCard) {
    //  This is fake api which I created from https://mocki.io/fake-json-api
    //  This api will just return success response with success message
    return this.httpService.postRequestWithFakeSuccessResponse(`${this.api}/v1/e5c12c3c`, data);
  }
}
