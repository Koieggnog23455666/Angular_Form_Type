import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProserviceService {

  constructor(private http:HttpClient) { }
  exclusive=new Subject<boolean>
   productApi='https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts'
   getAllProducts(){
     return this.http.get<[]>(this.productApi);
   }
}
