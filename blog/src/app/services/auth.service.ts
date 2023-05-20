import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Credentials} from "../models/credentials";
import {map} from "rxjs/operators";
import {Token} from "../models/token";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {SignUpForm} from "../models/signUpForm";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials: Credentials): Observable<boolean> {
    return this.http.post<Credentials>(this.url + '/user/auth', credentials)
      .pipe(map((result: Token | any) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }

        return false;
      }));
  }

  createOrUpdate(credentials: SignUpForm): Observable<Credentials> {
    return this.http.post<Credentials>(this.url + '/user/create', credentials);
  }

  logout() {
    return this.http.delete(this.url + '/user/logout/' + this.currentUser.id)
      .pipe(map(() => {
        localStorage.removeItem('token');
      }));
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !jwtHelper.isTokenExpired(token);
  }

  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    return new JwtHelperService().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
