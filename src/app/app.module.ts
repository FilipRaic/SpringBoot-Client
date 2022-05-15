import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareDetailComponent } from './hardwaredetail/hardwaredetail.component';
import { PricecheckComponent } from './pricecheck/pricecheck.component';
import { HardwareComponent } from './hardware/hardware.component';
import { ReviewComponent } from './review/review.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareDetailComponent,
    PricecheckComponent,
    HardwareComponent,
    ReviewComponent,
    ReviewsListComponent,
    ReviewDetailComponent
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
