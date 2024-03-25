import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsertableService } from '../services/usertable.service';
import { AddUserResModel } from '../models/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  @Input() userDetails: AddUserResModel = new AddUserResModel()

  constructor(private toastr: ToastrService,
    private userService: UsertableService,
    public activeModal: NgbActiveModal) { }

  update() {
    if (!String(this.userDetails.firstname || '').trim()) {
      this.toastr.warning('Please Enter first name');
    } else if (!String(this.userDetails.lastname || '').trim()) {
      this.toastr.warning('Please Enter last name');
    } else if (!String(this.userDetails.email || '').trim()) {
      this.toastr.warning('Please Enter email');
    } else if (!String(this.userDetails.username || '').trim()) {
      this.toastr.warning('Please Enter user name');
    } else if (!String(this.userDetails.password || '').trim()) {
      this.toastr.warning('Please Enter password');
    } else {
      this.userService.updateUser(this.userDetails).subscribe(x => {
        this.toastr.success('user update successfully');
        this.activeModal.close();
      })
    }
  }
}
