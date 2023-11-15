import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DisplayDriverComponent } from './display-driver/display-driver.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayDriverComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DriverModule { }
