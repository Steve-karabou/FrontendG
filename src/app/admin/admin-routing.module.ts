import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayDeliveryPackageComponent } from './display-delivery-package/display-delivery-package.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { CreatePackageComponent } from './create-package/create-package.component';

const routes: Routes = [
  {path:'', component: DisplayDeliveryPackageComponent},
  {path:'newDelivery', component: CreateDeliveryComponent},
  {path: 'newPackage', component: CreatePackageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
