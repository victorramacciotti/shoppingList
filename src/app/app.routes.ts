import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuardFn] },
    { path: '**', redirectTo: '/home' },
];
