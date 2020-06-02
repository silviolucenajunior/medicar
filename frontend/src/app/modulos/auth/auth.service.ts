import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable()
export class TokenAuthService {
  private AUTH_ENDPOINT = "http://127.0.0.1:8081/auth/token/login/";

  constructor(private http : HttpClient){}

  public login(username, password) {
    return this.http.post(this.AUTH_ENDPOINT, {username, password})
    .pipe(
      tap( (response) => {
        this.setToken(response['auth_token']);
      }),
      shareReplay()
    );
  }

  private setToken(token) {
    localStorage.setItem('token', token);
  }

  public isLoggedIn() {
    return this.getToken();
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public logout() {
    localStorage.removeItem('token');
  }
}