import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable()
export class TokenAuthService {
  private AUTH_ENDPOINT = "http://127.0.0.1:8081/auth/token/login/";
  private ME_ENDPOINT = "http://127.0.0.1:8081/auth/users/me/";
  private currentUser;

  constructor(private http : HttpClient){}

  public login(username, password) {
    return this.http.post(this.AUTH_ENDPOINT, {username, password})
    .pipe(
      tap( (response) => {
        this.setToken(response['auth_token']);
        this.setCurrentUserData();
      }),
      shareReplay()
    );
  }

  private setToken(token) {
    localStorage.setItem('token', token);
  }

  private setCurrentUserData() {
    this.http.get(this.ME_ENDPOINT).subscribe(
      user => {
        this.currentUser = user;
      },
      error => {
        console.log("Error");
        console.log(error);
      }
    );
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public getUserDisplay() {
    return this.currentUser && this.currentUser['username'] || "";
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