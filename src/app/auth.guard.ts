import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router, private toastr: ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if (localStorage.getItem('loginAdmin')) {
      return true;
    } else {
      this.toastr.error('You are not logged in. Please login first!!')
      this.router.navigate(['/'])
      return false;
    }
  }

}
