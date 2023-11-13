import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent {

  packageFormGroup!: FormGroup;
  
  constructor(private fb: FormBuilder, public adminService: AdminService, private route: Router){}

  ngOnInit():void {
    this.packageFormGroup = this.fb.group({
         from_name: [null, Validators.required],
         from_address: [null, Validators.required],
         from_location_lat: [null, Validators.required],
         from_location_lng: [null, Validators.required],
         to_name: [null, Validators.required],
         to_address: [null, Validators.required],
         to_location_lat: [null, Validators.required],
         to_location_lng: [null, Validators.required],
         weight: [null, Validators.required],
         width: [null, [Validators.required]],
         height: [null, [Validators.required]],
         depth: [null, [Validators.required]],
         description: [null, [Validators.required]],
    });
   }

   public  onSubmit(){
    const data = {
       ...this.packageFormGroup.value,       
     }
     this.adminService.savePackage(data).subscribe({
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
