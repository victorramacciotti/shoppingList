import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Item } from '../../../item';
 
@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonComponent],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {

  @Output() onAddItem = new EventEmitter<Item>();

  nome: string = '';
  comprado: boolean = false;
  mostraAddItem: boolean = false;

  onSubmit(){
    if(!this.nome){
      alert('Adicione um item!')
      return;
    }

    const novoItem = {
      nome: this.nome,
      comprado: this.comprado
    }

    this.onAddItem.emit(novoItem);

    this.nome = '';
    this.comprado = false;
  }

  changeVisibility(valor:boolean){
    this.mostraAddItem = valor;
  }

}
