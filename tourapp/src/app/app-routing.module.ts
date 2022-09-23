import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPriceComponent } from './get-price/get-price.component';
import { PackageFormComponent } from './package-form/package-form.component';
import { PackageListComponent } from './package-list/package-list.component';

const routes: Routes = [
  {path: 'add-package', component: PackageFormComponent},
  {path: 'get-price', component: GetPriceComponent},
  {path: '**', component: PackageListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
