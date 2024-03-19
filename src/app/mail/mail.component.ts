import { Component } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {
  mailData: any[] = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.emailHistory();
  }

  emailHistory() {
    this.historyService.getEmailHistory().subscribe(x => {
      this.mailData = x.data;
    });
  }

}
