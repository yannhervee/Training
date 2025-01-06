import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-list',
  imports: [CommonModule, FormsModule ],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
  standalone: true,
})
export class WishListComponent {
  @Input() book!: string;

  @Output() deleteWishBook = new EventEmitter<string>();

  handleDelete(): void{
    this.deleteWishBook.emit(this.book);
  }

}
