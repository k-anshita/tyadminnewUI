import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';
  constructor(private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
    if (localStorage.getItem('loginuserdetail') && location.pathname == '/') {
      this.router.navigate(['/dashboard'])

    }

  }
  
}
