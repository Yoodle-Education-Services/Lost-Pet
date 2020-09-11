import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
   _url = 'http://localhost: 3000/add';

  constructor(private http: HttpClient) { }
   petcustomer(userData){
    return this.http.post<any>(this._url, userData)

   }
  }
