import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getcardgamehistory(userId: number | undefined) {
    return this.http.get<any>(`${this.apiUrl}/cardwinner/cardgamehistory?userId=${userId}`);
  }

  getnumbergamehistory(userId: number | undefined) {
    return this.http.get<any>(`${this.apiUrl}/numberwinner/numbergames?userId=${userId}`);
  }

  getTicgamehistory(userId: number | undefined) {
    return this.http.get<any>(`${this.apiUrl}/ticwinner/ticgamehistory?userId=${userId}`);
  }

  getReviewhistory(){
      return this.http.get<any>(
        this.apiUrl + '/userreview/reviewHistory'
      )
  }

  getEmailHistory(){
    return this.http.get<any>(
      this.apiUrl + '/otp/mailHistory'
    )
  }

  getPaymentHistory(){
    return this.http.get<any>(
      this.apiUrl + '/payment/paymentReport'
    )
  }
}
