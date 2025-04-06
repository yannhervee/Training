import { Component, input, Input, output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  // @Input() name : string = "";
  name = input<string>('');
  // @Output() val = new EventEmitter();
  val = output<string>();

  handleClick() {
    this.val.emit(this.name());
  }
}
