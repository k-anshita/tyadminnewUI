import { Component } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentData: any[] = [];
  searchText = '';

  constructor(private historyService: HistoryService) { }

  ngOnInit(){
    this.paymentHistory();
  }

  paymentHistory() {
    this.historyService.getPaymentHistory().subscribe(x => {
      this.paymentData = x.data;
    })
  }
}
