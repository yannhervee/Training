import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-item',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie: string = ''; 
  @Input() isChecked: boolean = false; 
  // @Output() toggleSelection = new EventEmitter<{ movie: string; isSelected: boolean }>();
  @Output() toggleSelection = new EventEmitter<boolean>();

  




  handleCheckbox(): void {
    this.toggleSelection.emit(!this.isChecked);
  }
}
