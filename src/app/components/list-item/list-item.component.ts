import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCheckSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { Item } from '../../../item';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input () item!: Item;
  @Output () onDeleteItem = new EventEmitter<Item>();
  @Output () onDoneComprado = new EventEmitter<Item>();

  faTrashCan = faTrashCan;
  faCheckSquare = faCheckSquare;
  faSquare = faSquare;
  checkedItem: boolean = false;
  

  onDelete(item: Item){
    this.onDeleteItem.emit(item);
  }

  onDone(item: Item, valor:boolean){
    this.onDoneComprado.emit(item);
    this.checkedItem = valor;
  }

}
