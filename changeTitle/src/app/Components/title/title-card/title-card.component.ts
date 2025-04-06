import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Concept } from '../../../Interfaces/concept';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-card',
  imports: [CommonModule],
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.css'
})
export class TitleCardComponent {
  @Input() item: Concept = {
    title: '',
    body: '',
    color: ''
  }

  //@Output() color = new EventEmitter()
  color = output<string>();

  changeTitle(): void {
    console.log("emitted color ", this.item.color);
    this.color.emit(this.item.color);

  }
}
