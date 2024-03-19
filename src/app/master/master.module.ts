import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MasterComponent } from './master.component';
import { SiderModule } from '../sider/sider.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SiderModule,
    FormsModule,
    NgApexchartsModule
  ]
})
export class MasterModule { }
