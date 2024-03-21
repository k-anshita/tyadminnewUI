import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
import { UsertableService } from '../services/usertable.service';
import { HistoryService } from '../services/history.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userData: any[] = [];
  mailData: any[] = [];
  reviewData: any[] = [];

  constructor(private userService: UsertableService, private historyService: HistoryService) { }



  ngOnInit() {
    this.getUserDetail();
    this.emailHistory();
    this.getReviewDetail();
  }

  getUserDetail() {
    this.userService.getUserRegisterDetail().subscribe(x => {
      this.userData = x.data;
    });
  }

  emailHistory() {
    this.historyService.getEmailHistory().subscribe(x => {
      this.mailData = x.data;
    });
  }
  getReviewDetail() {
    this.historyService.getReviewhistory().subscribe(x => {
      this.reviewData = x.data;
    });
  }
}






