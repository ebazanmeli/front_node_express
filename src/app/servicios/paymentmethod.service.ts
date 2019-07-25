import { map } from 'rxjs/operators';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  public url: string;

  // tslint:disable-next-line:variable-name
  constructor(private _http: Http) {
    this.url = environment.baseUrl;
  }

  getPaymentMethods(site: string) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers });
    return this._http.get(this.url + 'sites/' + site + '/payment_methods', options).pipe(map(res => res.json()));
  }

}
