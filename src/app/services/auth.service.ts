import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // apiUrl = "https://jsonplaceholder.typicode.com";
  apiUrl = 'http://localhost:3000/api'

  constructor(private http:HttpClient) { }


  login(obj:any) {
    // const AdminUser = localStorage.getItem('AdminUser');
    return this.http.post<any>(
      this.apiUrl + '/user/login',
      obj

    );
  }

  updateProfile(model: any) {
    return this.http.put<any>(this.apiUrl + '/user/profile', model);
  }

  deleteProfile(id: number) {
    return this.http.delete<any>(this.apiUrl + `/user/profile/${id}`);

  }

  cardgamehistory(obj: any) {
    // const ticwinner = localStorage.getItem('tic-toe winner');
    return this.http.post<any>(
      this.apiUrl + '/cardwinner/cardgamehistory',
      obj,
    );
  }

  
  
}
