import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-display-delivery-package',
  templateUrl: './display-delivery-package.component.html',
  styleUrls: ['./display-delivery-package.component.css']
})
export class DisplayDeliveryPackageComponent {

  deliverys: any;
  packages: any;

  constructor(private router: Router, private adminService: AdminService){}

  ngOnInit():void {
   this.adminService.getAllDelivery().subscribe({
    next: (delivery: any)=>{
      this.deliverys = delivery;
    },
    error: (error) =>{
   }
   });

   this.adminService.getAllPackage().subscribe({
    next: (package1: any)=>{
      this.packages = package1;
    },
    error: (error) =>{
   }
   })

  }

  public newDelivery(): void{
    this.router.navigateByUrl("/newDelivery");
   }
   
  public newPackage(): void{
    this.router.navigateByUrl("/newPackage");
   }

}
