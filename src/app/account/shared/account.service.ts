import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/authenticate`, user).toPromise()
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }

  async createAccount(register: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/register`, register).toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token')
    return token;
  }
}
