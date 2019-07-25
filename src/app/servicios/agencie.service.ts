import { map } from 'rxjs/operators';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { Agencie } from '../models/agencie';

@Injectable({
  providedIn: 'root'
})
export class AgencieService {

  public url: string;

  // tslint:disable-next-line:variable-name
  constructor(private _http: Http) {
    this.url = environment.baseUrl;
  }

  getAgencies(formGroup: FormGroup) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const agencie = formGroup.value;
    const options = new RequestOptions({ headers });
    const urlAPI = this.url + 'MLA/payment_methods/rapipago/agencies?'
                          + '&lat=' + agencie.latitud + '&lon=' + agencie.longitud + '&radius=' + agencie.radio
                          + '&limit=' + agencie.limit + '&offset=' + agencie.offset + '&orderby=' + agencie.orderby
                          + '&criterio=' + agencie.criterio;
    return this._http.get(urlAPI, options).pipe(map(res => res.json()));
  }

  getAgenciesRecomended() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers });
    return this._http.get(this.url + 'agencies-recomended', options).pipe(map(res => res.json()));
  }

  getAgencie(id: number) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers });
    return this._http.get(this.url + 'agencies/' + id, options).pipe(map(res => res.json()));
  }

  saveAgencie(agencie: Agencie) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers });
    return this._http.post(this.url + 'agencies', agencie, options).pipe(map(res => res.json()));
  }

  removeAgencie(id: number) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers });
    return this._http.delete(this.url + 'agencies/' + id, options).pipe(map(res => res.json()));
  }

}
