import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../user/user.component';
import { AuthGuard } from '../auth.guard';
import { HistoryComponent } from '../history/history.component';
import { ReviewComponent } from '../review/review.component';
import { MailComponent } from '../mail/mail.component';
import { PaymentComponent } from '../payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'users', component: TableComponent, canActivate: [AuthGuard] },
      { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
      { path: 'review', component: ReviewComponent, canActivate: [AuthGuard] },
      { path: 'mail', component: MailComponent, canActivate: [AuthGuard] },
      { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] }
      // { path: 'login', component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
