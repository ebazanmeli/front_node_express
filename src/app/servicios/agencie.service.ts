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
  
  constructor(private _http: Http) {
    this.url = environment.baseUrl;
  }

  getAgencies(formGroup: FormGroup) {
    let headers = new Headers({ 
      'Content-Type': 'application/json'
    });
    let agencie = formGroup.value;
    let options = new RequestOptions({ headers: headers });
    let urlAPI = this.url + 'MLA/payment_methods/rapipago/agencies?'
                          + '&lat=' + agencie.latitud + '&lon=' + agencie.longitud + '&radius=' + agencie.radio
                          + '&limit=' + agencie.limit + "&offset=" + agencie.offset + "&orderby=" + agencie.orderby
                          + "&criterio=" + agencie.criterio;
    return this._http.get(urlAPI, options).pipe(map(res => res.json()));
  }

  getAgenciesRecomended() {
    let headers = new Headers({ 
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'agencies-recomended', options).pipe(map(res => res.json()));
  }

  getAgencie(id: number) {
    let headers = new Headers({ 
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'agencies/' + id, options).pipe(map(res => res.json()));
  }

  saveAgencie(agencie: Agencie) {
    let headers = new Headers({ 
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'agencies', agencie, options).pipe(map(res => res.json()));
  }

  removeAgencie(id: number) {
    let headers = new Headers({ 
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.delete(this.url + 'agencies/' + id, options).pipe(map(res => res.json()));
  }

}