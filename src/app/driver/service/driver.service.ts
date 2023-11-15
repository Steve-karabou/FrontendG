import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private url = "http://localhost:3000"
  private socket:any;

  constructor() { 
    // this.socket = io(this.url);
  }

  sendMessage(message: any){
    console.log("Lomé")
    this.socket.emit("new-message", message)
  }
  
 
  

}



