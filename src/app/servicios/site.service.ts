import { map } from 'rxjs/operators';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  
  public url: string;
  
  constructor(private _http: Http) {
    this.url = environment.baseUrl;
  }

  getSites() {
    let headers = new Headers({ 
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
        return this._http.get(this.url + 'sites', options).pipe(map(res => res.json()));
  }

}