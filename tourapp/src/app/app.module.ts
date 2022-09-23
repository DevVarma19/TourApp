import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageServiceService } from './service/package-service.service';
import { PackageFormComponent } from './package-form/package-form.component';
import { GetPriceComponent } from './get-price/get-price.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageListComponent,
    PackageFormComponent,
    GetPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PackageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
