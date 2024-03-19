import { Component } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  reviewData: any[] = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(){
    this.getUserDetail();
  }

  getUserDetail() {
    this.historyService.getReviewhistory().subscribe(x => {
      this.reviewData = x.data;
    });
  }
}
