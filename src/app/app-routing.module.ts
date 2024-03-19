import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  // { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },

  {
    path: '',
    loadChildren: () => import('../app/master/master.module').then(m => m.MasterModule) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
