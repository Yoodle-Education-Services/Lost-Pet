import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
   _url ='http://localhost:3000/petcustomers/add';

  constructor(private http: HttpClient) { }
   petcustomer(userData){
     console.log('userdata', userData);
     console.log("url", this._url);
    return this.http.post<any>(this._url, userData)

   }
  }
