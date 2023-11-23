import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private readonly apiUrl: string = 'http://localhost:3000/api';
  
  constructor(private socket: Socket, private http: HttpClient){ }
  
  statusChange(data: any) {
    console.log("Data:", data);
    this.socket.emit('status_changed', data);
  }

  locationChanged(data: any){
    console.log("Data1:", data);
    this.socket.emit('location_changed', data);
  }

  sendMessage(msg: string) {
    console.log("karabou1");
    this.socket.emit('message', msg);
  }
  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data:any) => data.msg));
  }

  public getDeliveryAndPackage(id: string){
    return this.http.get(`${this.apiUrl}/delivery/search/${id}`);
  }

}



