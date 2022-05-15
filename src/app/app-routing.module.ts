import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwareComponent } from './hardware/hardware.component';
import { HardwareDetailComponent } from './hardwaredetail/hardwaredetail.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewComponent } from './review/review.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';

const routes: Routes = [
  { path: 'hardware', component: HardwareComponent },
  { path: 'detail/:code', component: HardwareDetailComponent },
  { path: 'reviews', component: ReviewsListComponent },
  { path: 'reviewDetail/:title', component: ReviewDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
