import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareDetailComponent } from './hardwaredetail/hardwaredetail.component';
import { PricecheckComponent } from './pricecheck/pricecheck.component';
import { RouterModule } from '@angular/router';
import { HardwareComponent } from './hardware/hardware.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareDetailComponent,
    PricecheckComponent,
    HardwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
