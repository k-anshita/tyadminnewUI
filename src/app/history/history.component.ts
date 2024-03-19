import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { UserDetail } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  @Input() id: any[] = [];
  number_winner?: any[] = [];
  tic_winner?: any[] = [];
  card_winner?: any[] = [];

  constructor(private historyService: HistoryService,
    private toastr: ToastrService,
    private router: ActivatedRoute) { }


  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      const userId = +params['userId']; // Use + to convert string to number
      console.log(userId);
      this.getHistory(userId); // Call getHistory function with the fetched userId
    });

  }

  getHistory(id?: number) {
    if (!id) {
      this.toastr.warning('your is is undefined!!');
    } else {
      this.historyService.getTicgamehistory(id).subscribe(x => {

        this.tic_winner = x.data;
        console.log(this.tic_winner);
      });
      this.historyService.getcardgamehistory(id).subscribe(x => {

        this.card_winner = x.data;
      });
      this.historyService.getnumbergamehistory(id).subscribe(x => {

        this.number_winner = x.data;
      });
    }
  }
}

