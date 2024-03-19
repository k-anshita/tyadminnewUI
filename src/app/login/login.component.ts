import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username?: string
  password?: string

  constructor(private router: Router,
    private toastr: ToastrService,
    private authService: AuthService) { }

  save() {
    if (this.username != 'admin' || this.password != 'a123') {
      this.toastr.warning('your email or password wrong!!');
    }else  if (!String(this.username || '').trim()) {
      this.toastr.warning('please fill username');
    } else if (!String(this.password || '').trim()) {
      this.toastr.warning('please fill the password field');
    } else {

      const obj = {
        username: this.username,
        password: this.password
      }

      localStorage.setItem('loginAdmin', JSON.stringify(obj) || '')
      this.toastr.success('Login Successfully');
      this.router.navigate(['dashboard'])
      this.username = '';
      this.password = '';
    }
  }
}