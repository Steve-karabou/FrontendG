import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDriverComponent } from './display-driver/display-driver.component';

const routes: Routes = [
  {path:'driver', component: DisplayDriverComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
