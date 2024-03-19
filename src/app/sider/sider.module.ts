import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiderComponent } from './sider.component';



@NgModule({
  declarations: [SiderComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: SiderComponent
    }]),
    CommonModule
  ],
  exports: [
    SiderComponent
  ]
})
export class SiderModule { }
