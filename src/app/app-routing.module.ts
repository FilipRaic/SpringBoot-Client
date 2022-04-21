import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwareComponent } from './hardware/hardware.component';
import { HardwareDetailComponent } from './hardwaredetail/hardwaredetail.component';

const routes: Routes = [
  { path: 'hardware', component: HardwareComponent },
  { path: 'detail/:code', component: HardwareDetailComponent }
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
