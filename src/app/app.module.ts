import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { DriverModule } from './driver/driver.module';
import { TrackerModule } from './tracker/tracker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    DriverModule,
    TrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
