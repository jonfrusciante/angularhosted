import { Injectable } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';

declare const gapi: any;

@Injectable()
export class SignInService{

    public auth2: any;

    public googleInit() {
        gapi.load('auth2', () => {
          this.auth2 = gapi.auth2.init({
            client_id: '480806216212-5vo6it25koaruotqbe5f9trvfssm3i4e.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            scope: 'profile email'
          });
        });
      }
      
      public attachSignin(element,event) {
        this.auth2.attachClickHandler(element, {},event);
      }

}