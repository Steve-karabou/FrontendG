import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly apiUrl: string = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  public saveDelivery(data: any){
    return this.http.post(`${this.apiUrl}/delivery`, data);
  }

  public savePackage(data: any){
    return this.http.post(`${this.apiUrl}/package`, data);
  }

  public getAllPackage(){
    return this.http.get<any[]>(`${this.apiUrl}/package`);
   }

   public getAllDelivery(){
    return this.http.get<any[]>(`${this.apiUrl}/delivery`);
   }

   public getErrorMessage(fieldName: string, error: ValidationErrors){
     
    if(error['required']){

      return fieldName +" est requis";
    }else if(error['pattern']){

     return fieldName +" doit être sous";
    } else if(error['email']){

      return fieldName +" doit être un" +error['email']['email'];
     }  else return ""
   }
}

