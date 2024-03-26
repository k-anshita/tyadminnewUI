import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent {
  isShowDeleteConfirmPopUp: boolean = true;
  constructor(private router: Router, private toastr: ToastrService) { }

  check_loginuser() {
    if (localStorage.getItem('loginAdmin')) {
      this.toastr.warning('you are already log in!!');
      // alert('you are already register')
    } else {
      this.router.navigate(['/'])
    }
  }

  logOut() {
    localStorage.removeItem('loginAdmin');
    this.toastr.success('you are logout successfully!!')
    this.router.navigate(['/']);
  }
}
