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
  searchQuery: string = '';

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.paymentHistory();
  }

  paymentHistory() {
    this.historyService.getPaymentHistory().subscribe(x => {
      this.paymentData = x.data;
    })
  }

  get filteredUsers(): any[] {
    return this.paymentData.filter(payment => {
      // Filter logic based on the search query
      return payment.cardName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        payment.cardNumber.toLowerCase().includes(this.searchQuery.toLowerCase()) 
    });
  }
}
