import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSadTear } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss'
})
export class Error404Component {
  faSadTear = faSadTear;
}
