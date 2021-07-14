import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDTO, RegisterDTO } from '../models/models';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  }

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router) { }


  login(loginObj: loginDTO) {
    return this.http.post(
      environment.apiPath + 'Auth/Login',
      JSON.stringify(loginObj),
      this.httpOptions)
  }

  register(RegisterObj: RegisterDTO) {
    return this.http.post(
      environment.apiPath + 'Auth/Register',
      JSON.stringify(RegisterObj),
      this.httpOptions)
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(environment.token);
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public setToken(token: string) {
    localStorage.setItem(environment.token, token);
  }

  public logout() {
    localStorage.removeItem(environment.token);
    this.router.navigate(['/auth/login'])
  }

  get isUserLoggedIn() {
    const token = localStorage.getItem(environment.token);
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }
}
