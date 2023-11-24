import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../service/driver.service';
import { Subscription } from 'rxjs';

declare const L: any;

@Component({
  selector: 'app-display-driver',
  templateUrl: './display-driver.component.html',
  styleUrls: ['./display-driver.component.css']
})
export class DisplayDriverComponent implements OnInit{

  searchFormGroup!: FormGroup;
  message: string = '';
  receivedMessages: string[] = [];
  private socketSubscription!: Subscription;
  latitude: any;
  longitude: any;

  constructor(private fb: FormBuilder, private driverService: DriverService){}

  public messages: string[] = [];
  deliveryPackage!:any
   map!:any;
  

  ngOnInit(){
    this.searchFormGroup = this.fb.group({
      deliveryId: ["", Validators.required]
    });

    if(!navigator.geolocation){
      console.log("Location is not support")
    }

    navigator.geolocation.getCurrentPosition((position) =>{
      console.log(`lat:${position.coords.latitude}, lon: ${position.coords.longitude}`);
       this.map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
       }).addTo(this.map);

       let deliveryPosition = L.marker([position.coords.latitude, position.coords.longitude]).addTo(this.map).bindPopup("<b>delivery position</b><br>.");
     
    });
    this.watchPosition()
    setInterval(()=> { this.driverService.locationChanged({id: this.deliveryPackage._id, lat: this.latitude, lng: this.longitude}) }, 1200000);
  }
 
  watchPosition(){
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition((position) =>{
      console.log(`lat:${position.coords.latitude}, lon: ${position.coords.longitude}`);
      
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;  
      if(position.coords.latitude === desLat){
        navigator.geolocation.clearWatch(id);
      }
    }, (err)=>{
      console.log(err)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  }

  pickedUp(){
    let data = {status: "picked-up", id: this.deliveryPackage._id}
   this.driverService.statusChange(data)
  }

  inTransit(){
    let data = {status: "in-transit", id: this.deliveryPackage._id}
    this.driverService.statusChange(data)
  }

  deliveredt(){
    let data = {status: "delivered", id: this.deliveryPackage._id}
    this.driverService.statusChange(data)
  }

  failed(){
    let data = {status: "failed", id: this.deliveryPackage._id}
    this.driverService.statusChange(data)
  }

  public searchDeliveryPackage(){
    let id = this.searchFormGroup.value.deliveryId;
    this.driverService.getDeliveryAndPackage(id).subscribe({
      next: (data: any) => {
        this.deliveryPackage = data[0];
             
       if(this.deliveryPackage?.package[0].to_location.lat && this.deliveryPackage?.package[0].to_location.lng){
          console.log("to_location:", this.deliveryPackage.package[0].to_location);
         let greenIcon = new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
          });
        let packageSource = L.marker([this.deliveryPackage?.package[0].to_location.lat, this.deliveryPackage?.package[0].to_location.lng], 
          {icon: greenIcon}).addTo(this.map).bindPopup("<b>package source</b><br>.");
       }

       if(this.deliveryPackage?.package[0].from_location.lat && this.deliveryPackage?.package[0].from_location.lng){
        console.log("to_location:", this.deliveryPackage.package[0].from_location);
       let greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
        });
      let packageFrom = L.marker([this.deliveryPackage?.package[0].from_location.lat, this.deliveryPackage?.package[0].from_location.lng], 
        {icon: greenIcon}).addTo(this.map).bindPopup("<b>package From</b><br>.");
     }
  
      }
     })
  }
   
  }


