import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomedownfooterComponent } from './homedownfooter/homedownfooter.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DashboardPageRoutingModule } from '../pages/dashboard/dashboard-routing.module';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [HomedownfooterComponent, LogoutComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    DashboardPageRoutingModule
  ],
  exports: [
    HomedownfooterComponent,
    LogoutComponent
  ]
})
export class ComponentsModule { }
