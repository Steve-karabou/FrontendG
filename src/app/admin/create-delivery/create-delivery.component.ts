import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent {

  deliveryFormGroup!: FormGroup;
  packages: any;
  
  constructor(private fb: FormBuilder, public adminService: AdminService, private route: Router){}

  ngOnInit():void {
    this.adminService.getAllPackage().subscribe({
      next: (package1: any)=>{
        this.packages = package1;
      },
      error: (error) =>{
     }
     })

    this.deliveryFormGroup = this.fb.group({
      pickup_time: [null, Validators.required],
      start_time: [null, Validators.required],
      location_lat:  [null, Validators.required],
      location_lng: [null, Validators.required],
      status: [null, Validators.required],
      package_id: [null, Validators.required]
    });
   }

   public  onSubmit(){
    const data = {
       ...this.deliveryFormGroup.value
     }
     this.adminService.saveDelivery(data).subscribe({
      next: (package1: any)=>{
        alert("Save successfully")
       this.route.navigateByUrl("/")
      },
      error: (error) =>{
        alert("Faill")
     }
     })
}
}