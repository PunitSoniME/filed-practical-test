import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string) {
    return this.httpClient.get<T>(url);
  }

  post<T1>(url: string, data: T1): Observable<any> {
    return this.httpClient.post<T1>(url, data);
  }

  postRequestWithFakeSuccessResponse<T1>(url: string, data: T1): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(data);

      //  To Pass error, comment above resolve line and uncomment below reject line
      //  reject("Error in processing credit card payment, Try again later");
    });
  }

}
