import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  private readonly apiUrl: string = 'http://localhost:3000/api';
  
  constructor(private socket: Socket, private http: HttpClient){ }

  public getPackageAndDelivery(id: string){
    return this.http.get(`${this.apiUrl}/package/search/${id}`);
  }
}
