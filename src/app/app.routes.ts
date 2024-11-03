import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';
import { authGuardFn } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'myList', component: MyListComponent, canActivate: [authGuardFn] },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuardFn] },
    { path: '404', component: Error404Component },
    { path: '**', redirectTo: '/404' },
];
