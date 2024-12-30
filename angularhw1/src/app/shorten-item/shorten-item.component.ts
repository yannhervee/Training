import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { textMessage } from '../shorten-text/shorten-text.component';

@Component({
  selector: 'app-shorten-item',
  imports: [CommonModule],
  templateUrl: './shorten-item.component.html',
  styleUrl: './shorten-item.component.css'
})
export class ShortenItemComponent {

  @Input() messages: textMessage[] = [];
  @Output() selectMessage = new EventEmitter<textMessage>();

  onSelect(message: textMessage): void {
    this.selectMessage.emit(message);
  }


}
