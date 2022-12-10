import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/authenticate`,user).toPromise()
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }

  async createAccount(register: any) {
    console.log(JSON.stringify(register))
    const result = await this.http.post<any>(`${environment.api}/auth/register`, register).toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token')
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token)

    if (decoded.exp === undefined) {
      let nada: any = null;
      return nada;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
      if (!token) {
        return true;
      }

      const date = this.getTokenExpirationDate(token);
      if (date === undefined) {
        return false;
      }

      return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
