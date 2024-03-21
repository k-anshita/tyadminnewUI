import { Component } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  reviewData: any[] = [];
  searchQuery: string = '';

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail() {
    this.historyService.getReviewhistory().subscribe(x => {
      this.reviewData = x.data;
    });
  }

  get filteredUsers(): any[] {
    return this.reviewData.filter(review => {
      // Filter logic based on the search query
      return review.subject.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        review.message.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        review.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        review.createdDate.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }
}
