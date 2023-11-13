import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DisplayDeliveryPackageComponent } from './display-delivery-package/display-delivery-package.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DisplayDeliveryPackageComponent,
    CreateDeliveryComponent,
    CreatePackageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
