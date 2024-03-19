import { Component, Input } from '@angular/core';
import { UsertableService } from '../services/usertable.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  @Input() id: number | undefined;

  constructor(public activeModal: NgbActiveModal,
    private userService: UsertableService,
    private toastr: ToastrService) { }

  // deleteProfile() {

  //   console.log()

  //   this.userService.deleteProfile(this.profileData.id).subscribe(x => {

  //     this.toastr.success('user deleted successfully!');
  //   }
  //     , err => {
  //       this.toastr.error('Something went wrong, Please try again later!');
  //     }
  //   );

  // }

  deleteUser() {
    if (!this.id) {
      this.toastr.warning('plase check user id!!');
    } else {
      this.userService.deleteProfile(this.id).subscribe(x => {
        this.toastr.success('user deleted successfully!');
        this.activeModal.close();

      });
    }
  }
}
