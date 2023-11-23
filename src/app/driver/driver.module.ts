import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { DriverRoutingModule } from './driver-routing.module';
import { DisplayDriverComponent } from './display-driver/display-driver.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    DisplayDriverComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ]
})
export class DriverModule { }
