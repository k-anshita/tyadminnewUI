import { Component, OnInit } from '@angular/core';

import { UsertableService } from '../services/usertable.service';
import { PaginationReqModel } from '../models/common.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgModel } from '@angular/forms';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from '../add-user/add-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { HistoryComponent } from '../history/history.component';
import { AddUserResModel, UserDetail } from '../models/user.model';


@Component({
  selector: 'app-table',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class TableComponent {
  userData:any[]=[];
  title: string = 'View Game History';
  searchQuery: string = ''; // property to store the search query
  
  constructor(private userService: UsertableService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail() {
    this.userService.getUserRegisterDetail().subscribe(x => {
      this.userData = x.data;
    });
  }

  openDeleteModal(id: number) {
    const modalRef = this.modalService.open(DeleteUserComponent);
    modalRef.componentInstance.id = id;
  }

  openUserModal() {
    const modalRef = this.modalService.open(AddUserComponent);
  }

  openUpdateUserModal(userDetails: object) {
    const modalRef = this.modalService.open(UpdateUserComponent);
    modalRef.componentInstance.userDetails = userDetails;
  }

  openGameHistory(id: number | undefined) {
    if (id) {
      this.router.navigate(['/history'], { queryParams: { userId: id } })
      console.log(id);

    } else {
      console.log('id is not defined');
    }
  }


  get  filteredUsers():any[] {
    return this.userData.filter(user => {
      // Filter logic based on the search query
      return user.firstname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             user.lastname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             user.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
             user.username.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  convertToExcel(data: any[]) {
    let excelContent = 'data:text/csv;charset=utf-8,';
    // Add headers
    const headers = Object.keys(data[0]);
    excelContent += headers.join(',') + '\n';
    
    // Add data rows
    data.forEach((item) => {
      const values = headers.map((header) => item[header]);
      excelContent += values.join(',') + '\n';
    });
    
    return encodeURI(excelContent);
  }
  downloadExcel() {
    // Ensure that userData is populated
    if (this.userData.length > 0) {
      const excelData = this.convertToExcel(this.userData);
      const link = document.createElement('a');
      link.setAttribute('href', excelData);
      link.setAttribute('download', 'data.csv');
      document.body.appendChild(link);
      link.click();
    } else {
      // Handle case where userData is empty or not yet fetched
      console.log('User data is not available.');
    }
  }
  

}
