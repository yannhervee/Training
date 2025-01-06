import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExpectBook } from '../../../services/interfaces/book';
import { BookService } from '../../../services/book.service';
import { BookItemComponent } from '../book-item/book-item.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-booklist',
  imports: [CommonModule, BookItemComponent, FormsModule],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {

  books: ExpectBook[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.bookService.bookSubject$.subscribe({
      next: (books) => {
        this.books = books;
      },
    });
  }

  handleAddToWishlist(book: ExpectBook): void {
    console.log("worked, ", book);
    this.bookService.addToWishList(book); 
  }
  

}
