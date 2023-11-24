import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrackerService } from '../service/tracker.service';

declare const L: any;

@Component({
  selector: 'app-display-tracker',
  templateUrl: './display-tracker.component.html',
  styleUrls: ['./display-tracker.component.css']
})
export class DisplayTrackerComponent {

  searchFormGroup!: FormGroup;
  packageDelivery!:any
  map!:any;

  constructor(private fb: FormBuilder, private trackerService: TrackerService){}

  ngOnInit(){
    this.searchFormGroup = this.fb.group({
      packageId: ["", Validators.required]
    });

    this.map = L.map('map').setView([6.201028079047396, 1.1807102286989462], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
       }).addTo(this.map);
  }

  public searchPackageDelivery(){
    let id = this.searchFormGroup.value.packageId;
    console.log("id:", id)
    this.trackerService.getPackageAndDelivery(id).subscribe({
      next: (data: any) => {
        this.packageDelivery = data[0];

        if(this.packageDelivery?.from_location.lat && this.packageDelivery?.from_location.lng){
          
          let greenIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
            });
          let packageFrom = L.marker([this.packageDelivery?.from_location.lat, this.packageDelivery?.from_location.lng], {icon: greenIcon}).addTo(this.map).bindPopup("<b>package From</b><br>.");
         }

         if(this.packageDelivery?.to_location.lat && this.packageDelivery?.to_location.lng){
          
          let greenIcon = new L.Icon({
             iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
             shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
             iconSize: [25, 41],
             iconAnchor: [12, 41],
             popupAnchor: [1, -34],
            shadowSize: [41, 41]
             });
           let packageTo = L.marker([this.packageDelivery?.to_location.lat, this.packageDelivery?.to_location.lng], {icon: greenIcon}).addTo(this.map).bindPopup("<b>package To</b><br>.");
         }

         if(this.packageDelivery?.delivery[0].location.lat && this.packageDelivery?.delivery[0].location.lng){
          console.log(this.packageDelivery?.delivery[0].location);
          let greenIcon = new L.Icon({
             iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
             shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
             iconSize: [25, 41],
             iconAnchor: [12, 41],
             popupAnchor: [1, -34],
            shadowSize: [41, 41]
             });
           let deliveryLocation = L.marker([this.packageDelivery?.delivery[0].location.lat, this.packageDelivery?.delivery[0].location.lng], {icon: greenIcon}).addTo(this.map).bindPopup("<b>delivery position</b><br>.");
         }

        }
      });
    }
    
  }

