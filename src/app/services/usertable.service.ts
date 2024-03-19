import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetail } from '../models/user.model';
import { PaginationReqModel } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class UsertableService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/api'



  getUserRegisterDetail() {
    return this.http.get<any>(
      this.apiUrl + '/user/userHistory'
    )
  }

  deleteProfile(id: number) {
    return this.http.delete<any>(this.apiUrl + `/user/profile/${id}`);

  }

  addUser(AddUser: any) {
    return this.http.post<any>(
      this.apiUrl + '/user/register',
      AddUser,

    );
  }

  updateUser(model: any) {
    return this.http.put<any>(
      this.apiUrl + '/user/profile',
      model
    );
  }
}
