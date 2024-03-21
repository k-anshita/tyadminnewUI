import { Component } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {
  mailData: any[] = [];
  searchQuery: string = '';

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.emailHistory();
  }

  emailHistory() {
    this.historyService.getEmailHistory().subscribe(x => {
      this.mailData = x.data;
    });
  }

  get filteredUsers(): any[] {
    return this.mailData.filter(mail => {
      // Filter logic based on the search query
      return mail.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    });
  }
}
