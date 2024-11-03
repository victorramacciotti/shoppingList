import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  constructor(public auth: AuthService) {}
  

  /*login() {

  this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
   
    logoutParams: {returnTo: this.document.location.origin,},
   
    });
   
    }*/

  
}
