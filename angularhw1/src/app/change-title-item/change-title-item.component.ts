import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../change-title/change-title.component';

@Component({
  selector: 'app-change-title-item',
  imports: [CommonModule],
  templateUrl: './change-title-item.component.html',
  styleUrl: './change-title-item.component.css',
  
})
export class ChangeTitleItemComponent {
  @Input() card!: Card;
  @Output() btnColor= new EventEmitter();
  handleClick() {
    this.btnColor.emit(this.card.btnColor)
  }

}
