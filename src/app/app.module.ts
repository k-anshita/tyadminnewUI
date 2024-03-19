import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterComponent } from './master/master.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ToastrModule } from 'ngx-toastr';
import { ChartComponent } from './chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HistoryComponent } from './history/history.component';
import { ReviewComponent } from './review/review.component';
import { MailComponent } from './mail/mail.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TableComponent,
    ChartComponent,
    DeleteUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    HistoryComponent,
    ReviewComponent,
    MailComponent,
    PaymentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-center',
      }
    ),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
