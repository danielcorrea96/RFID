// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'cJ13ifvkOchhtGVztPGSV7GtFfUqA9Mk',
    domain: 'inquili.auth0.com',
    responseType: 'token id_token',
    audience: 'https://inquili.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });
  admin: string;
  noadmin: boolean;

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/bienvenidos']);
      } else if (err) {
        this.router.navigate(['/bienvenidos']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('admin', authResult.idTokenPayload.sub);
    this.admin = authResult.idTokenPayload.sub;
    if ( authResult.idTokenPayload.sub !== 'google-oauth2|112556076970300341746' ) {
       alert('No eres administrador.');
    }
    console.log(this.admin);

  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    const admin = JSON.stringify(localStorage.getItem('admin'));
    // console.log(admin);
    return new Date().getTime() < expiresAt && admin === '"google-oauth2|112556076970300341746"';
  }


}
