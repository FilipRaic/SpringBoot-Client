import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HardwareDetailComponent} from './hardwaredetail/hardwaredetail.component';
import { PricecheckComponent } from './pricecheck/pricecheck.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareDetailComponent,
    PricecheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
