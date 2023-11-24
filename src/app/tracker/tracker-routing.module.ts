import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTrackerComponent } from './display-tracker/display-tracker.component';

const routes: Routes = [
  {path:'tracker', component: DisplayTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
