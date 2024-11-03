import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ListComponent } from '../list/list.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ListComponent, NavbarComponent],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss'
})
export class MyListComponent {

}
