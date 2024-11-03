import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe, NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profile?: User | undefined | null;

  constructor(public auth: AuthService){}

  ngOnInit(): void {
      this.auth.user$.subscribe((profile) => {
        this.profile = profile;
      });
  }

}
