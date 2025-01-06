import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { ExpectBook } from '../../../services/interfaces/book';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-book-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {

  @Input() book!: ExpectBook
  @Output() addToWishlist = new EventEmitter<ExpectBook>();

  handleaddToWish(): void{
    this.addToWishlist.emit(this.book)
  }
}
