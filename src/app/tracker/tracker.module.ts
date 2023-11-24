import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackerRoutingModule } from './tracker-routing.module';
import { DisplayTrackerComponent } from './display-tracker/display-tracker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DisplayTrackerComponent
  ],
  imports: [
    CommonModule,
    TrackerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class TrackerModule { }
