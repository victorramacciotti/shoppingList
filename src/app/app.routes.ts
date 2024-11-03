import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';
import { authGuardFn } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { MyListComponent } from './components/my-list/my-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'myList', component: MyListComponent, canActivate: [authGuardFn] },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuardFn] },
    { path: '**', redirectTo: '/home' },
];
