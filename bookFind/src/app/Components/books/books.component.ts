import { Component, inject } from '@angular/core';
import { VolumeInfo } from '../../Interfaces/book';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
 // books: VolumeInfo[] = [];
  private bookService = inject(BookService);
  books = inject(BookService).selectedBooks$;

  // ngOnInit(): void {
  //   this.books = this.bookService.selectedBooks$();
  // }

}
