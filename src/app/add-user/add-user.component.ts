import { Component } from '@angular/core';
import { AddUserResModel, UserDetail } from '../models/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UsertableService } from '../services/usertable.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  addUser = new AddUserResModel();

  constructor(public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private userService: UsertableService) { }

  add() {
    if (!String(this.addUser.firstname || '').trim()) {
      this.toastr.warning('Please Enter first name');
    } else if (!String(this.addUser.lastname || '').trim()) {
      this.toastr.warning('Please Enter last name');
    } else if (!String(this.addUser.email || '').trim()) {
      this.toastr.warning('Please Enter email');
    } else if (!String(this.addUser.username || '').trim()) {
      this.toastr.warning('Please Enter user name');
    } else if (!String(this.addUser.password || '').trim()) {
      this.toastr.warning('Please Enter password');
    } else if (!String(this.addUser.gender || '').trim()) {
      this.toastr.warning('Please Enter gender');
    } else if (!String(this.addUser.date || '').trim()) {
      this.toastr.warning('Please Enter date');
    } else {
      this.userService.addUser(this.addUser).subscribe(x => {
        this.toastr.success('user add successfully');
        this.activeModal.close();
      })
    }
  }

}
