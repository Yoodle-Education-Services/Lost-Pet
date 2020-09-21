import { from } from 'rxjs';
import { IPetcustomer } from './petcustomers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable} from 'rxjs/Observable'


@Injectable({
  providedIn: 'root'
})
export class PetserviceService {
  private _url: string = "/assets/data/petcustomers.json";

  constructor(private http: HttpClient) { }

  getPets(){
    return this.http.get<IPetcustomer[]>(this._url);
   }

}
